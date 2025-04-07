import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserData } from "../../../../store/selectors/authorizationSelector";

export default function AuthorizationAvatar() {
    const user = useSelector(getUserData);

    const generateRandomColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `#${red}${green}${blue}`;
    };

    const [background, setBackground] = useState("#ccc");
    const [text, setText] = useState("#000");

    useEffect(() => {
        if (user) {
            const storageKey = `${user.id}`;

            const savedColors = localStorage.getItem(storageKey);
            if (savedColors) {
                const { background, text } = JSON.parse(savedColors);
                setBackground(background);
                setText(text);
            } else {
                const bg = generateRandomColor();
                const txt = generateRandomColor();
                setBackground(bg);
                setText(txt);
                localStorage.setItem(storageKey, JSON.stringify({ background: bg, text: txt }));
            }
        }
    }, [user]);

    if (!user) return null;

    const style = {
        backgroundColor: background,
        color: text,
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "25px",
        fontWeight: 600
    };

    return (
        <div style={style}>
            {`${user?.first_name.charAt(0)}${user?.last_name.charAt(0)}`}
        </div>
    );
}
