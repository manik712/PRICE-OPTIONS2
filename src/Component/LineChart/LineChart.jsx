import { LineChart as LChart , Line,XAxis ,YAxis} from 'recharts';
const LineChart = () => {
  
  const  
    students = [
      {
        "student_name": "Student 1",
        "math_mark": 75,
        "science_mark": 88,
        "history_mark": 92
      },
      {
        "student_name": "Student 2",
        "math_mark": 82,
        "science_mark": 76,
        "history_mark": 85
      },
      {
        "student_name": "Student 3",
        "math_mark": 88,
        "science_mark": 90,
        "history_mark": 89
      },
      {
        "student_name": "Student 4",
        "math_mark": 91,
        "science_mark": 94,
        "history_mark": 87
      },
      {
        "student_name": "Student 5",
        "math_mark": 79,
        "science_mark": 82,
        "history_mark": 78
      },
      {
        "student_name": "Student 6",
        "math_mark": 95,
        "science_mark": 91,
        "history_mark": 94
      },
      {
        "student_name": "Student 7",
        "math_mark": 86,
        "science_mark": 89,
        "history_mark": 88
      },
      {
        "student_name": "Student 8",
        "math_mark": 78,
        "science_mark": 84,
        "history_mark": 80
      },
      {
        "student_name": "Student 9",
        "math_mark": 89,
        "science_mark": 87,
        "history_mark": 85
      }
    ]
  
  

  return (
    <div>
       <LChart width={800}height={400}  data={students}>
        <XAxis  dataKey='student_name'></XAxis>
        <YAxis dataKey=''></YAxis>
        <Line dataKey='math_mark' stroke='red'></Line>
        <Line dataKey='science_mark' stroke='blue'></Line>
        <Line dataKey='history_mark'></Line>

       </LChart>
    </div>
  );
};

export default LineChart;
