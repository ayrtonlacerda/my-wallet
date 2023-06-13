import {
  Bar,
  BarChart,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Line,
  PieChart,
  Pie,
  Legend,
  Tooltip,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 1800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page A",
    uv: 4000 * 0.4,
    pv: 2400 * 0.4,
    amt: 2400 * 0.4,
  },
  {
    name: "Page B",
    uv: 3000 * 1.2,
    pv: 1398 * 1.2,
    amt: 2210 * 1.2,
  },
  {
    name: "Page C",
    uv: 2000 * 1.4,
    pv: 1800 * 1.4,
    amt: 2290 * 1.4,
  },
  {
    name: "Page D",
    uv: 2780 * 1.5,
    pv: 3908 * 1.6,
    amt: 2000 * 1.8,
  },
  {
    name: "Page E",
    uv: 1890 * 1.9,
    pv: 4800 * 1.8,
    amt: 2181 * 2.2,
  },
  {
    name: "Page F",
    uv: 2390 * 2.2,
    pv: 3800 * 2.2,
    amt: 2500 * 2.2,
  },
  {
    name: "Page G",
    uv: 3490 * 2.2,
    pv: 4300 * 2.2,
    amt: 2100 * 2.2,
  },
];

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  //var letters = "789ABCDEF";
  var color = "#";
  for (var i = 0; i < 3; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const getDataFormatGraph = (data: any[]) => {
  const infoData = data[0];

  return Object.keys(infoData).map((key) => ({
    key,
    id: `color${key.toUpperCase()}`,
    color: getRandomColor(),
  }));
};

export const GraphProfitOrLoss = () => {
  const dataFormatGraph = getDataFormatGraph(data || getDataFormatGraph);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          {dataFormatGraph.map(
            (itemGradient) =>
              itemGradient.key !== "name" && (
                <linearGradient
                  key={itemGradient.key}
                  id={itemGradient.id}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor={itemGradient.color}
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor={itemGradient.color}
                    stopOpacity={0}
                  />
                </linearGradient>
              )
          )}
          {/* 
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#fc2a9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#fc2a9d" stopOpacity={0} />
          </linearGradient> */}
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" stroke="#fff1" />
        <Tooltip />
        {dataFormatGraph.map(
          (itemGradient) =>
            itemGradient.key !== "name" && (
              <Area
                key={itemGradient.key}
                type="monotone"
                dataKey={itemGradient.key}
                stroke={itemGradient.color}
                fillOpacity={1}
                fill={`url(#${itemGradient.id})`}
              />
            )
        )}
        {/*    <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
        <Area
          type="monotone"
          dataKey="amt"
          stroke="#fc2a9d"
          fillOpacity={1}
          fill="url(#colorAmt)"
        /> */}
      </AreaChart>
    </ResponsiveContainer>
  );
};
