import {
    Button,
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui"
import { cn } from "@/lib/utils"
import React from "react"
import { countries } from "../countries"
import { usePhoneNumberContext } from "@/contexts/PhoneNumberProvider"

const CountriesSelect: React.FC = () => {
    const { currentCountry, setCurrentCountry, isOpen, setIsOpen } =
        usePhoneNumberContext()

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="ghost"
                    className="h-element flex items-center px-2y"
                    role="combobox"
                    aria-expanded={isOpen}
                >
                    {currentCountry ? (
                        <>
                            <span
                                className={cn(
                                    currentCountry.icon,
                                    "w-[22px] block"
                                )}
                            ></span>
                            <span className="ml-2x block">
                                {currentCountry.code} {currentCountry.prefix}
                            </span>
                        </>
                    ) : null}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[230px] p-0">
                <Command>
                    <CommandInput placeholder="Search ..." className="h-9" />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                        {countries.map((country) => (
                            <CommandItem
                                key={country.code}
                                value={country.label}
                                onSelect={() => {
                                    setCurrentCountry(country)
                                    setIsOpen(false)
                                }}
                            >
                                <div className="h-element flex items-center">
                                    <span
                                        className={cn(
                                            country.icon,
                                            "w-[22px] block"
                                        )}
                                    ></span>
                                    <span className="ml-2x block">
                                        {country.label}
                                    </span>
                                </div>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default CountriesSelect
