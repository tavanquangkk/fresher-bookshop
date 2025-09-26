import { HashLoader } from "react-spinners";

const Loading = () => {
    return (
        <div>
            <HashLoader
                color="red"
                style={{
                    position: "absolute",
                    height: "100vh",
                    width: "100vw",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            />
        </div>
    );
};

export default Loading;
