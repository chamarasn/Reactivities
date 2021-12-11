import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Activity } from "../models/activity";
import {v4 as uuid} from 'uuid';

export default class ActivityStore {
    activityRegistry = new Map<string, Activity>();
    selectedActivity: Activity | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;
    submitting = false;

    constructor(){
        makeAutoObservable (this);
    }

    get activitiesByDate() {
        return Array.from(this.activityRegistry.values())
            .sort((a,b) => Date.parse(a.date) - Date.parse(b.date));
    }

    loadActivities = async () => {
        try{
            const activities = await agent.Activities.list();

            runInAction(() => {
                activities.map(x => {
                    x.date = x.date.split('T')[0]
                    this.activityRegistry.set(x.id, x)
                });
                this.setLoadingInitial(false);
            })

        } catch (error){
            runInAction(() => {

                console.log(error);
                this.setLoadingInitial(false);
            })
        }
    }

    setLoadingInitial = (state: boolean)=>{
        this.loadingInitial = state;
    }

    setSelectedActivity = (id: string) => {
        this.selectedActivity = this.activityRegistry.get(id);
    }

    cancelSelectedActivity = () => {
        this.selectedActivity = undefined;
    }

    openForm = (id?: string) => {
        id ? this.setSelectedActivity(id) : this.cancelSelectedActivity();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    editActivity = async (activity: Activity) => {
        this.submitting = true;
        try {
            await agent.Activities.update(activity);
            runInAction(() => {
                this.activityRegistry.set(activity.id, activity);
                this.selectedActivity = activity;
                this.submitting = false;
                this.editMode = false;
            })
        }catch (error){
            runInAction(() => {
                this.submitting = false;
                this.editMode = false;
            })
        }
    }

    createActivity = async (activity: Activity) => {
        this.submitting = true;

        try {
            activity.id = uuid();

            await agent.Activities.create(activity);
            runInAction(() => {
                this.activityRegistry.set(activity.id, activity);

                this.submitting = false;
                this.editMode = false;
            })
        } catch (error) {
            runInAction(() => {
                this.submitting = false;
                this.editMode = false;
            })
        }
    }

    deleteActivity = async (id: string) => {
        this.submitting = true;

        try{
            await agent.Activities.delete(id);
            runInAction(() => {
                this.activityRegistry.delete(id);
                this.submitting = false;

                if (this.selectedActivity?.id === id){
                    this.selectedActivity = undefined;
                }
            })
        }
        catch (error){
            runInAction(() => {
                this.submitting = false;
            })
        }
    }
}