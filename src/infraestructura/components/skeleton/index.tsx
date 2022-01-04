import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const SkeletonView = () => {
  const data: number[] = [...Array(32)].map((_, i) => i);

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
