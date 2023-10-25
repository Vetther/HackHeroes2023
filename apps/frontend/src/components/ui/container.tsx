import * as React from "react";

import { cn } from "@/lib/utils";

const Container = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
    return (
        <div className={cn("container", className)} ref={ref} {...props}>
            {children}
        </div>
    );
});
Container.displayName = "Container";

export { Container };
