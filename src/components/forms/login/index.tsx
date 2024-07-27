import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography, CardBody,
} from "@material-tailwind/react";

export default function LoginFormComponent() {
    return (
        <Card color="transparent">
         <CardBody>
             <Typography
                 variant="h4" color="blue-gray">
                 Kirish
             </Typography>
             <Typography color="gray" className="mt-1 font-normal"
             >
                 Xush kelibsiz, kirish uchun login va parolingizni kiriting
             </Typography>
             <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                 <div className="mb-1 flex flex-col gap-6">
                     <Typography
                         variant="h6" color="blue-gray" className="-mb-3">
                         Email
                     </Typography>
                     <Input
                         size="lg"
                         placeholder="name@mail.com"
                         className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                         labelProps={{
                             className: "before:content-none after:content-none",
                         }} crossOrigin={undefined}/>
                     <Typography variant="h6"
                                 color="blue-gray" className="-mb-3">
                         Parol
                     </Typography>
                     <Input
                         type="password"
                         size="lg"
                         placeholder="********"
                         className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                         labelProps={{
                             className: "before:content-none after:content-none",
                         }} crossOrigin={undefined}  />
                 </div>
                 <Checkbox
                     label={<Typography
                         variant="small"
                         color="gray"
                         className="flex items-center font-normal"
                     >
                        meni eslab qolish
                     </Typography>}
                     containerProps={{className: "-ml-2.5"}} crossOrigin={undefined}
                 />
                 <Button className="mt-6" fullWidth>
                     kirish
                 </Button>
             </form>
         </CardBody>
        </Card>
    );
}