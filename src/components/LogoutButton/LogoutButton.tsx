import { logoutUser } from "@/api/authApi"
import { useAppDispatch } from "@/hooks/useStore"
import { ReactComponent as LogoutIcon } from "@/assets/svg/icon-logout.svg"

export const LogoutButton = () => {
    const dispatch = useAppDispatch()

    return (
        <button
            data-cy="logout"
            className="bg-transparent ml-6x"
            onClick={() => dispatch(logoutUser())}
        >
            <LogoutIcon />
        </button>
    )
}
