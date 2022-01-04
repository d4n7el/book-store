import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const SkeletonView = () => {
  const data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="skeleton">
      {data.map((data) => {
        return (
          <div key={data}>
            <Box key={data}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
          </div>
        );
      })}
    </div>
  );
};

export default SkeletonView;
