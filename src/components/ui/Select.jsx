import React from 'react';
import { cn } from "../../utils/cn";

const Select = React.forwardRef(({
    className,
    children,
    options = [],
    label,
    error,
    placeholder,
    ...props
}, ref) => {
    return (
        <div className="space-y-2">
            {label && <label className="text-sm font-medium">{label}</label>}
            <select
                className={cn(
                    "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            >
                {placeholder && <option value="">{placeholder}</option>}
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
                {children}
            </select>
            {error && <p className="text-sm text-destructive">{error}</p>}
        </div>
    );
});
Select.displayName = 'Select';

export default Select;