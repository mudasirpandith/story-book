import * as React from "react";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Input, InputProps } from "./input";
import { Button } from "./button";

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    return (
      <div className="flex flex-row items-center relative">
        <Input type={showPassword ? "text" : "password"} ref={ref} {...props} />
        <Button
          type="button"
          className="absolute right-0 top-0 mr-2 rounded-md bg-transparent p-2 text-muted-foreground hover:bg-muted/5 focus:outline-none"
          onClick={() => setShowPassword(!showPassword)}
        >
          {!showPassword ? (
            <EyeIcon className="h-4 w-4" aria-hidden="true" />
          ) : (
            <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
          )}
        </Button>
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
