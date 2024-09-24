import { Breadcrumbs, Stack, Typography } from "@mui/material";

export default function PostsPage () {
    return <Stack py={2}>
        <Stack px={2}>
            <Breadcrumbs>
                <Typography>게시글 관리</Typography>
                <Typography>목록</Typography>
            </Breadcrumbs>
        </Stack>
        <Stack px={2}>

        </Stack>
    </Stack>
}