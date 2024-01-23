import CreateShiftForm from "@/components/CreateShiftForm/CreateShiftForm"
import CurrentShiftTitle from "@/components/CurrentShiftTitle/CurrentShiftTitle"
import ShiftHistoryForm from "@/components/ShifHistory/ShiftHistoryForm"
import ShiftDetails from "@/components/ShiftDetails/ShiftDetails"
import { ShiftProvider } from "@/contexts/ShiftProvider"
import { useAppSelector } from "@/hooks/useStore"

const Shift = () => {
    const {
        data: { isActive },
    } = useAppSelector((state) => state.shift)
    return (
        <ShiftProvider>
            <section className="flex flex-colum pt-[113px] lg:max-w-[1200px] w-full mx-auto px-7x grow">
                <div className="flex w-full grow items-stretch">
                    <div className="basis-1/3 border-r border-l border-r-customGrayLight border-l-customGrayLight px-7x">
                        {isActive ? <CurrentShiftTitle /> : <CreateShiftForm />}
                        <ShiftHistoryForm />
                    </div>
                    <div className="basis-1/3 border-r border-r-customGrayLight px-7x">
                        2
                    </div>
                    <div className="basis-1/3 border-r border-r-customGrayLight px-7x">
                        <ShiftDetails />
                    </div>
                </div>
            </section>
        </ShiftProvider>
    )
}
export default Shift
