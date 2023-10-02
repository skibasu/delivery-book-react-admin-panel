import { OrderStatus } from "@/features/orders/types"
import { User } from "@/features/users/types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React from "react"

interface IColumnUser {
    boardType: OrderStatus
    className?: string
    selectedBy: Pick<User, "avatar" | "firstName" | "lastName"> | null
}

const ColumnUser: React.FC<IColumnUser> = ({
    className,
    boardType,
    selectedBy,
}) => {
    if (selectedBy !== null) {
        const { firstName, lastName, avatar } = selectedBy
        return boardType !== OrderStatus.OPEN &&
            boardType !== OrderStatus.DRAFT ? (
            <div
                className={`${className} flex justify-center items-center px-4x py-7.1x`}
            >
                <Avatar>
                    <AvatarImage
                        src={avatar}
                        alt={`${firstName} ${lastName}`}
                    />
                    <AvatarFallback>{`${firstName?.[0]?.toUpperCase()} ${lastName?.[0]?.toUpperCase()}`}</AvatarFallback>
                </Avatar>
            </div>
        ) : null
    } else {
        return null
    }
}

export default ColumnUser
