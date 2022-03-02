import { Formik } from "formik";
import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import MyTextArea from "../../app/common/form/MyTextArea";
import MyTextInput from "../../app/common/form/MyTextInput";
import * as Yup from "yup";
import { useStore } from "../../app/stores/store";

interface Prop {
  setEditMode: (editMode: boolean) => void;
}

export default function ProfileEditForm({ setEditMode }: Prop) {
  const {
    profileStore: { profile, updateProfile },
  } = useStore();

  return (
    <Segment clearing>
      <Formik
        validationSchema={Yup.object({
          displayName: Yup.string().required(),
        })}
        enableReinitialize
        initialValues={{ displayName: profile?.displayName, bio: profile?.bio }}
        onSubmit={(values) => {
          updateProfile(values).then(() => {
            setEditMode(false);
          });
        }}
      >
        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
          <Form
            className="ui form"
            onSubmit={handleSubmit}
            autoComplete="false"
          >
            <MyTextInput name="displayName" placeholder="Display Name" />
            <MyTextArea rows={3} placeholder="Bio" name="bio" />
            <Button
              disabled={isSubmitting || !dirty || !isValid}
              loading={isSubmitting}
              floated="right"
              positive
              type="submit"
              content="Update profile"
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
}
