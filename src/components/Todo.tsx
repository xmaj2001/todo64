import React from "react";
import { Checkbox, Chip, cn } from "@nextui-org/react";

export const Todo = () => {
    return (
        <Checkbox
            classNames={{
                base: cn(
                    "inline-flex max-w-md w-full bg-content1 m-0",
                    "hover:bg-content2 items-center justify-start",
                    "cursor-pointer rounded-lg gap-2 p-1 border-2 border-transparent"
                ),
                label: "w-full",
            }}
            value={"Lorem"}
        >
            <div className="w-full flex justify-between gap-2">
                <p style={{fontSize:14}}><small>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</small></p>
                <Chip color="warning" size="sm" variant="flat">
                    danger
                </Chip>
            </div>
        </Checkbox>
    );
};



