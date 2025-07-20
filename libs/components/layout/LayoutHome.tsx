import { Stack } from "@mui/material";
import Head from "next/head";

const withLayoutMain = (Component: any) => {
    return (props: any) => {
        return (
        <>
        <Head>
            <title>Nestar</title>
        </Head>
        <Stack id="pc-wrap">
            <Stack sx={{ background: "#4caf50" }}>Header Home</Stack>
            
            <Stack id={"main"}>
                <Component {...props} />
            </Stack>

            <Stack sx={{ background: "#795548" }}>Footer</Stack>
        </Stack>
        </>
        );
    };
};

export default withLayoutMain;