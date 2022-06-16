/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, forwardRef } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";

export interface IBarProps {
    data: {
        labels: string[];
        datasets: Array<{
            data: number[];
            backgroundColor: string | string[];
            borderColor?: string | string[];
            borderWidth?: number;
        }>;
    };
    options: {
        [x: string]: unknown;
    };
    width?: number;
    height?: number;
    plugins?: any[];
}

export const BarChart: FC<IBarProps> = ({ data, options, width, height }) => {
    return (
        <Bar
            data={data}
            options={options}
            width={width}
            height={height}
        />
    );
};

export const HorizontalBarChart = forwardRef<any, IBarProps>(
    ({ data, options, width, height, plugins }, ref) => {
        const opt = { ...options,
            indexAxis: 'y' as const,
            elements: {
              bar: {
                borderWidth: 2,
              },
            },
        };
        return (
            <Bar
                data={data}
                options={opt}
                width={width}
                height={height}
                ref={ref}
                plugins={plugins}
            />
        );
    }
);

HorizontalBarChart.displayName = "HorizontalBarChart";

export const LineChart: FC<IBarProps> = ({ data, options, width, height }) => {
    return (
        <Line
            data={data}
            options={options}
            width={width}
            height={height}
        />
    );
};

export const PieChart: FC<IBarProps> = ({ data, options, width, height }) => {
    return (
        <Pie
            data={data}
            options={options}
            width={width}
            height={height}
        />
    );
};

export const DonutChart: FC<IBarProps> = ({ data, options, width, height }) => {
    return (
        <Doughnut
            data={data}
            options={options}
            width={width}
            height={height}
        />
    );
};
