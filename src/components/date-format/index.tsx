
interface DateFormatProps {
    currentDate?: string | null;
}

export default function DateFormatComponent({currentDate}: DateFormatProps): JSX.Element {
    if (!currentDate) return <div></div>

    const new_date = new Date(currentDate)

    if (new_date !== null) {
        return (
            <span className={"text-center"}>
                 {new_date.getHours().toString().length <= 1 ? `0${new_date.getHours()}` : new_date.getHours()}:
                {new_date.getMinutes().toString().length <= 1 ? `0${new_date.getMinutes()}` : new_date.getMinutes()}&nbsp;
                {new_date.getDate().toString().length <= 1 ? `0${new_date.getDate()}` : new_date.getDate()}.
                {(new_date.getMonth() + 1).toString().length <= 1 ? `0${new_date.getMonth() + 1}` : new_date.getMonth() + 1}.
                {new_date.getFullYear()}
            </span>
        )
    }
    return <div></div>
}