// import { useCountries } from "use-react-countries";
// import {
//     Input,
//     Menu,
//     MenuHandler,
//     MenuList,
//     MenuItem,
//     Button,
// } from "@material-tailwind/react"; 
import { Fragment } from "react";

const InputWithDropdown = () => {

    // const { countries } = useCountries();
    // const [country, setCountry] = useState(0);
    // const { name, flags, countryCallingCode } = countries[country];

    return (
        <Fragment>
            {/* <div className="relative flex w-full max-w-[24rem]">
                <Menu placement="bottom-start">
                    <MenuHandler>
                        <Button
                            ripple={false}
                            variant="text"
                            color="blue-gray"
                            className="flex h-10 items-center font gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                        >
                            <img
                                src={flags.svg}
                                alt={name}
                                className="h-4 w-4 rounded-full object-cover"
                            />
                            {countryCallingCode}
                        </Button>
                    </MenuHandler>
                    <MenuList className="max-h-[20rem] max-w-[18rem]">
                        {countries.map(({ name, flags, countryCallingCode }, index) => {
                            return (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    className="flex font items-center gap-2"
                                    onClick={() => setCountry(index)}
                                >
                                    <img
                                        src={flags.svg}
                                        alt={name}
                                        className="h-5 w-5 rounded-full object-cover"
                                    />
                                    {name} <span className="ml-auto">{countryCallingCode}</span>
                                </MenuItem>
                            );
                        })}
                    </MenuList>
                </Menu>
                <Input
                    type="tel"
                    placeholder="Mobile Number"
                    className="rounded-l-none font py-1.5 !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    containerProps={{
                        className: "min-w-0",
                    }}
                />
            </div> */}
        </Fragment>
    )
}

export default InputWithDropdown