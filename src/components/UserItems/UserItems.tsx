import React from "react"
import { Avatar, AvatarFallback, AvatarImage, SelectItem } from "../ui"
interface IItem {
    _id: string
    isHidden: boolean
    firstName: string
    lastName: string
    avatar?: string
}
interface IUsersItems {
    items: IItem[]
}
const UsersItems = ({ items }: IUsersItems) => {
    return (
        <>
            {items.map((item) => {
                const {
                    firstName,
                    lastName,
                    avatar: url,
                    _id: id,
                    isHidden,
                } = item
                return (
                    <div
                        key={id}
                        className={
                            isHidden
                                ? "hidden"
                                : "relative z-10 bg-textWhite py-4x border-b border-b-customGrayLight translate-y-0 transition-all duration-0 hover:duration-150 hover:shadow-md hover:z-20 hover:rounded-sm hover:translate-y-[-2px]"
                        }
                    >
                        <SelectItem
                            value={id}
                            key={id}
                            className="cursor-pointer"
                        >
                            <div className="flex items-center">
                                <Avatar className="!h-[24px] !w-[24px] ml-2x">
                                    <AvatarImage
                                        src={url}
                                        alt={`${firstName} ${lastName}`}
                                    />
                                    <AvatarFallback className="bg-storm text-textWhite font-[6px]">{`${firstName?.[0]?.toUpperCase()}${lastName?.[0]?.toUpperCase()}`}</AvatarFallback>
                                </Avatar>
                                <div className="text-sm pl-4x">
                                    <p className="m0 capitalize">{`${firstName} ${lastName}`}</p>
                                </div>
                            </div>
                        </SelectItem>
                    </div>
                )
            })}
        </>
    )
}

export default UsersItems
