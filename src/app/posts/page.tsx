import {
  Breadcrumbs,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import axios from 'axios';

interface PostsRowProps {
  id: string;
  title: string;
  createdBy: string;
}

function PostsRow({ id, title, createdBy }: PostsRowProps) {
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{createdBy}</TableCell>
    </TableRow>
  );
}

interface Post {
  id: string;
  title: string;
  author: string;
}

export default function PostsPage() {
  const { data, isPending, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      axios.get<Post[]>('http://localhost:3001/posts').then((res) => res.data),
  });

  return (
    <Stack py={2}>
      <Stack px={2}>
        <Breadcrumbs>
          <Typography>게시글 관리</Typography>
          <Typography>목록</Typography>
        </Breadcrumbs>
              <Typography variant='h3'>게시글 목록</Typography>
              <Button href='/posts/create'>게시글 작성하기</Button>
      </Stack>
      <Stack px={2}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>식별자</TableCell>
                <TableCell>제목</TableCell>
                <TableCell>작성자</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!isPending &&
                !isError &&
                data.map((row) => (
                  <PostsRow
                    id={row.id}
                    title={row.title}
                    createdBy={row.author}
                  />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
}
