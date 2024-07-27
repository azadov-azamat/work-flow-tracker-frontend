import React from "react";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    Avatar,
    Card,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Typography,
} from "@material-tailwind/react";

import {
    CakeIcon,
    ChevronDownIcon,
    ClipboardDocumentCheckIcon,
    ClockIcon,
    DocumentIcon,
    FunnelIcon,
    PresentationChartBarIcon,
    StopCircleIcon,
} from "@heroicons/react/24/outline";
import {BellIcon} from "@heroicons/react/16/solid";
import {Link} from "react-router-dom";

export default function SidebarMenuComponent() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value);
    };

    const navLinks = [
        {
            label: "Dashboard",
            link: '/dashboard',
            icon: <PresentationChartBarIcon className="h-5 w-5"/>,
            isData: false
        },
        {
            label: "Kelib-ketish holati",
            link: '/arrival-status',
            icon: <ClockIcon className="h-5 w-5"/>,
            isData: true
        },
        {
            label: "Ijro muddatlari",
            link: '/execution-period',
            icon: <FunnelIcon className="h-5 w-5"/>,
            isData: true
        },
        {
            label: "Doimiy topshiriq xatlar ijrosi",
            icon: <DocumentIcon className="h-5 w-5"/>,
            child: [
                {
                    label: "O'rganish holati",
                    link: '/learning-status',
                    isData: false
                },
                {
                    label: "Ijro holati",
                    link: '/execution-status',
                    isData: false
                },
            ]
        },
        {
            label: "Tug'ilgan kunlar",
            link: '/birthdays',
            icon: <CakeIcon className="h-5 w-5"/>,
            isData: true
        },
        {
            label: "Hisobotlar",
            link: '/reports',
            icon: <ClipboardDocumentCheckIcon className="h-5 w-5"/>,
            isData: false
        }
    ]

    return (
        <>
            <Card
                color="transparent"
                shadow
                className="h-screen w-96 p-4"
            >
                <div className="mb-2 flex items-center gap-4 p-4">
                    <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="lg"/>
                    <Typography variant="h6" color="blue-gray">
                        Kutpiddinov Xusniddin
                        Muxiddinovich
                    </Typography>
                </div>

                <List>
                    {
                        navLinks.map((nav, key) => {
                            return !nav.child ? (
                                    <Link to={nav.link} key={key}>
                                        <ListItem>
                                            <ListItemPrefix>
                                                {nav.icon}
                                            </ListItemPrefix>
                                            {nav.label}
                                            <ListItemSuffix>
                                                {
                                                    nav.isData && (<BellIcon className={'h-4 w-4 text-red-500'}/>)
                                                }
                                            </ListItemSuffix>
                                        </ListItem>
                                    </Link>
                            ) : (
                                <Accordion
                                    key={key}
                                    open={open === 1}
                                    icon={
                                        <ChevronDownIcon
                                            strokeWidth={2.5}
                                            className={`mx-auto h-4 w-4 transition-transform ${
                                                open === 1 ? "rotate-180" : ""
                                            }`}
                                        />
                                    }
                                >
                                    <ListItem
                                        className="p-0" selected={open === 1}>
                                        <AccordionHeader
                                            onClick={() => handleOpen(1)}
                                            className="border-b-0 p-3"
                                        >
                                            <ListItemPrefix

                                            >
                                                {nav.icon}
                                            </ListItemPrefix>
                                            <Typography color="blue-gray"
                                                        className="mr-auto font-normal">
                                                {nav.label}
                                            </Typography>
                                        </AccordionHeader>
                                    </ListItem>
                                    <AccordionBody className="py-1">
                                        <List className="p-0 ml-5"
                                        >
                                            {
                                                nav.child.map((child, childKey) => {
                                                    return (
                                                        <Link to={child.link} key={childKey}>
                                                            <ListItem>
                                                                <ListItemPrefix>
                                                                    <StopCircleIcon className="h-5 w-5"/>
                                                                </ListItemPrefix>
                                                                {child.label}
                                                                <ListItemSuffix>
                                                                    {
                                                                        child.isData && (<BellIcon className={'h-4 w-4 text-red-500'}/>)
                                                                    }
                                                                </ListItemSuffix>
                                                            </ListItem>
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </List>
                                    </AccordionBody>
                                </Accordion>
                            )
                        })
                    }
                </List>
            </Card>
        </>
    );
}