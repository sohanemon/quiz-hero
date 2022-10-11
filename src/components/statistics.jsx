import Heading from "./heading";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <section>
      <br />
      <br />
      <Heading
        coloredText={"Statistics"}
        normalText='about questions'
        subText={"With the chart"}
      />
      <br />
      <div className='mx-auto w-max'>
        <ResponsiveContainer width={500} height={300}>
          <BarChart data={data.data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='total' fill='coral' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Statistics;
