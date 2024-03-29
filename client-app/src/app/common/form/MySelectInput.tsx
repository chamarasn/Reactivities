import { useField } from "formik";
import React from "react";
import { Form, Select } from "semantic-ui-react";

interface Props{
    placeholder: string;
    name: string;
    options: any;
    label?: string;
}

export default function MySelectInput(props : Props){
    const [field, meta, helpers] = useField(props.name);

    return (
        <Form.Field error={meta.touched && !!meta.error} >
            <label>{props.label}</label>
            <Select  
                clearable
                options={props.options}
                value={field.value || null}
                onChange={(e, d) => helpers.setValue(d.value)}
                onBlur={() => helpers.setTouched(true)}
                placeholder={props.placeholder}
            />
            {meta.touched && meta.error ? (
                <label color="red" >{meta.error}</label>
            ): null}
        </Form.Field>
    )
}