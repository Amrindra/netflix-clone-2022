import { Movie } from '../typings';

interface rowProps {
  title: string;
  movies: Movie[];
}

function Row({ title, movies }: rowProps) {
  return <div>Row</div>;
}

export default Row;
