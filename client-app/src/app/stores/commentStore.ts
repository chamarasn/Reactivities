import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { makeAutoObservable, runInAction } from "mobx";
import { ChatComment } from "../models/comment";
import { store } from "./store";

export default class CommentStore {
    comments: ChatComment[] = [];
    hubConnecton : HubConnection | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    creareHubConnection = (activityId: string) => {
        if(store.activityStore.selectedActivity) {
            this.hubConnecton = new HubConnectionBuilder()
                .withUrl('http://localhost:5000/chat?activityId=' + activityId, {
                    accessTokenFactory: () => store.userStore.user?.token!
                })
                .withAutomaticReconnect()
                .configureLogging(LogLevel.Information)
                .build();
            
            this.hubConnecton.start().catch(error => console.log('Error establishing the connection: ', error))

            this.hubConnecton.on('LoadComments', (comments: ChatComment[]) => {
                runInAction(() => {
                    comments.map(comment => comment.createdAt = new Date(comment.createdAt + 'Z'))
                    this.comments = comments
                });
            })

            this.hubConnecton.on('ReceivedComment', (comment: ChatComment) => {
              runInAction(() => {
                comment.createdAt = new Date(comment.createdAt);
                this.comments.unshift(comment)
              }) ;
            })
        }
    }

    stopHubConnection = () => {
        this.hubConnecton?.stop().catch(error => console.log('Error stopping connection ', error));
    }

    clearComments = () => {
        this.comments = [];
        this.stopHubConnection()
    }    

    addComment = async (values: any) => {
        values.activityId = store.activityStore.selectedActivity?.id;

        try {
            this.hubConnecton?.invoke('SendComment', values);

        }catch (error){
            console.log(error);
        }
    }
}