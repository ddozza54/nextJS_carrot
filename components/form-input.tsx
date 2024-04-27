interface FormInputProps {
    name: string;
    type: string;
    placeholder: string;
    required: boolean;
    errors?: string[];
}

export default function FormInput({ name, type, placeholder, required, errors = [] }: FormInputProps) {
    return (
        <div className="flex flex-col gap-2">
            <input
                name={name}
                className="p-2 bg-transparent rounded-md w-full h-10 focus:outline-none ring-1 focus:ring-2 ring-neutral-200 focus:ring-orange-500 transition border-none placeholder:text-neutral-400"
                type={type}
                placeholder={placeholder}
                required={required}
            />
            {errors.map((error, i) => <span key={i} className="text-red-500 font-medium">{error}</span>)}
        </div>




    )
}