import { getErrorMessagesByPropertyName } from "@/lib/schema-validator";
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";


type IInput = {
    name: string;
    type?: string;
    placeholder?: string;
    label?: string;
    size?: "small" | "large";
    value?: string | string[] | undefined;
    validation?: object;
    id?: string;
}


const FormInput = ({
    name,
    type,
    placeholder,
    label,
    size = "large",
    value,
    validation,
    id
}: IInput) => {

    const { control, formState: { errors } } = useFormContext();

    const errorMessage = getErrorMessagesByPropertyName(errors, name);

    return (
        <>
            {
                label ? label : null
            }

            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    type === "password" ? (
                        <Input.Password
                            type={type}
                            size={size}
                            placeholder={placeholder}
                            {...field}
                            value={value ? value : field.value}
                        />
                    ) : (
                        <Input
                            type={type}
                            size={size}
                            {...field}
                            value={value ? value : field.value}
                        />
                    )

                )}
            />
            <small style={{ color: "red" }}>{errorMessage}</small>
        </>
    )
}


export default FormInput