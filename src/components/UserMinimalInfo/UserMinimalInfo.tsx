import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAppSelector } from "@/hooks/useStore"

const UserMinimalInfo = () => {
    const { firstName, lastName, role } = useAppSelector(
        (state) => state.profile.profile
    )
    return (
        <div className="flex items-center">
            <Avatar>
                <AvatarImage src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-textWhite text-sm pl-4x">
                <p className="m0 capitalize">{`${firstName} ${lastName}`}</p>
                <p className="m0 capitalize">{`${String(
                    role
                ).toLowerCase()}`}</p>
            </div>
        </div>
    )
}

export default UserMinimalInfo
