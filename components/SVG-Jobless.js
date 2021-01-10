import { useEffect } from 'react';

function Icon(props) {
  useEffect(() => {
    console.log('i run once')
    console.log(props.isDrawing, "props isDrawing")
    const timer = setTimeout(() => {
      props.draw()
    }, 0);
    return () => clearTimeout(timer);
  },[]);
  return (
    <div id="svg-container">
      <svg
      className={props.isDrawing?'active':''}
        id="Icon"
        width="100%"
        height="100%"
        version="1.0"
        viewBox="0 0 180.000000 180.000000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          transform="translate(0 180) scale(.1 -.1)"
          fill="grey"
          stroke="navy"
          strokeWidth="3"
        >
          <path
            d="m835 1646c-131-32-269-136-321-242-24-49-26-66-30-204-3-95 0-150 6-150s10 5 10 12c0 19 13 0 27-40 7-20 13-53 13-73s6-52 14-70c8-19 12-45 10-59-3-14 1-34 9-44 12-16 13-12 5 35-5 30-11 118-15 197-3 78-9 142-13 142s-10 9-13 19c-3 13 1 21 15 24 15 4 18 1 13-13-3-10-1-21 5-25 10-6 18 7 24 37 2 7 7 22 11 32 5 10 4 44-1 75-12 73-7 102 18 109 12 3 16 7 8 12s-6 11 5 20c12 10 15 10 15-4 0-20 19-21 26-1 3 8 21 24 40 36 30 18 37 19 69 8 27-10 38-10 47-1 7 7 24 12 39 12s29 4 31 10c5 14 52 17 54 3 1-7 2-18 3-24 0-6 9-8 20-4 10 3 31 0 47-6s47-13 68-15c42-4 71-23 49-31-20-7-15-23 7-23 11 0 20-3 20-7 0-5 13-22 28-39 91-103 90-102 86-152-2-26-1-39 2-29 8 25 25 21 20-5-8-42-18-68-28-68-12 0 1-42 15-52 26-16 30 6 10 60-3 6 2 12 11 12 14 0 16-16 16-109 0-72 4-112 12-117s9 0 5 16c-8 33 15 197 25 174 4-11 5 46 2 126-7 163-14 183-86 268-82 96-159 143-273 168-73 16-114 16-180 0zm445-246c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10z"
            className="svg-elem-1"
          ></path>
          <path
            d="m910 1490c0-5 5-10 11-10 5 0 7 5 4 10-3 6-8 10-11 10-2 0-4-4-4-10z"
            className="svg-elem-2"
          ></path>
          <path
            d="m745 1460c3-5 11-10 16-10 6 0 7 5 4 10-3 6-11 10-16 10-6 0-7-4-4-10z"
            className="svg-elem-3"
          ></path>
          <path
            d="m710 1432c0-6 5-14 11-18 8-4 8-9 0-17-6-6-11-18-11-26 1-13 2-13 11 2 5 9 19 17 29 17 11 0 20 5 20 10 0 6-5 10-12 10-6 0-20 7-30 17-10 9-18 11-18 5z"
            className="svg-elem-4"
          ></path>
          <path
            d="m668 1403c6-2 18-2 25 0 6 3 1 5-13 5s-19-2-12-5z"
            className="svg-elem-5"
          ></path>
          <path
            d="m630 1376c0-9 5-16 10-16 6 0 10 4 10 9 0 6-4 13-10 16-5 3-10-1-10-9z"
            className="svg-elem-6"
          ></path>
          <path
            d="m636 1321c-4-7-5-15-2-18 9-9 19 4 14 18-4 11-6 11-12 0z"
            className="svg-elem-7"
          ></path>
          <path
            d="m783 1123c-15-8-40-26-55-40-16-15-33-23-42-20-10 4-16 1-16-7 0-18 60-13 92 8 30 19 113 27 144 12 29-14 31-47 5-98-12-24-15-38-8-41 7-2 5-16-6-39-18-37-22-70-10-81 11-11 33 14 33 38 0 12 7 28 15 35 12 10 15 10 15-2 0-8-6-20-12-27-11-10-9-11 5-5 16 6 18 18 16 103l-2 96-44 40c-48 44-84 52-130 28z"
            className="svg-elem-8"
          ></path>
          <path
            d="m1064 1101c-41-37-42-40-43-106 0-45 4-77 14-91 11-17 12-24 2-27-9-4-9-7 1-18 26-27 1-89-36-89-7 0-12-5-12-11 0-7 11-8 30-4 22 5 30 3 28-6-2-7 6-15 17-17s24-10 28-18 15-14 23-14c9 0 14-5 12-12-4-11-47-17-156-19-29-1-55-6-58-10-3-6 39-9 96-8 56 0 106-3 111-8 24-24-52-53-142-53-78 0-109 8-109 26 0 8-7 14-15 14-24 0-17-38 10-56 19-12 43-16 93-14 37 2 88 3 115 3 42 0 48 3 54 25 3 14 12 37 19 51 8 15 10 27 4 29-13 5 0 32 16 32 7 0 18-8 23-17 10-17 10-16 10 2 0 22-29 47-69 60-39 12-52 36-32 58 15 17 15 22-1 65-10 26-19 56-20 67s-10 34-19 52c-17 31-15 63 3 63 5 0 9 7 9 16 0 10 5 14 16 10 9-4 13-2 8 5-7 12 99 8 129-5 32-15 18 11-21 38-54 37-88 34-138-13z"
            className="svg-elem-9"
          ></path>
          <path
            d="m795 1051c-16-3-29-11-28-16 8-38 13-45 36-45 17 0 28 7 32 20 7 21 30 27 40 10 3-5 10-10 16-10 5 0 9 5 9 10 0 6-6 10-14 10s-16 4-18 9c-5 13-40 19-73 12z"
            className="svg-elem-10"
          ></path>
          <path
            d="m1115 1039c9-29 5-25 32-33 16-5 26-2 35 13 16 27 28 27 28 0 0-20 21-23 27-3 7 23-18 37-72 42-56 5-57 4-50-19z"
            className="svg-elem-11"
          ></path>
          <path
            d="m1070 1030c-8-5-11-12-7-16s13-2 19 4c15 15 7 24-12 12z"
            className="svg-elem-12"
          ></path>
          <path
            d="m727 1023c-13-12-7-33 8-33 8 0 15 9 15 20 0 20-11 26-23 13z"
            className="svg-elem-13"
          ></path>
          <path
            d="m1325 855c-3-17-10-48-16-70-5-22-9-53-9-70 2-58-10-141-25-178-8-20-15-46-15-57s-4-20-9-20-11-7-15-15c-3-8 0-15 7-15 15 0 76 176 84 241 3 24 12 52 21 62 14 15 13 17-3 17-11 0-15 5-12 14 14 36 18 86 9 103-9 16-11 14-17-12z"
            className="svg-elem-14"
          ></path>
          <path
            d="m932 779c-7-12-11-23-9-26 8-8 57 29 51 38-9 15-29 10-42-12z"
            className="svg-elem-15"
          ></path>
          <path
            d="m560 657l5-72 3 64c2 35-1 68-5 72s-6-24-3-64z"
            className="svg-elem-16"
          ></path>
          <path
            d="m870 720c-8-5-23-11-32-14-10-3-18-10-18-15 0-14 54-8 67 9 23 28 14 38-17 20z"
            className="svg-elem-17"
          ></path>
          <path
            d="m980 704c0-8 5-12 10-9 6 4 8 11 5 16-9 14-15 11-15-7z"
            className="svg-elem-18"
          ></path>
          <path
            d="m1247 658c-27-88-31-112-18-104 6 4 11 13 11 20 0 8 6 19 14 25 18 15 31 90 19 102-6 6-16-9-26-43z"
            className="svg-elem-19"
          ></path>
          <path
            d="m880 639c0-5 5-7 10-4 6 3 10 8 10 11 0 2-4 4-10 4-5 0-10-5-10-11z"
            className="svg-elem-20"
          ></path>
          <path
            d="m596 583c10-40 14-41 14-5 0 18-5 32-10 32-6 0-8-11-4-27z"
            className="svg-elem-21"
          ></path>
          <path
            d="m1197 517c-11-29-9-53 4-40 6 6 9 21 7 34-3 21-4 22-11 6z"
            className="svg-elem-22"
          ></path>
          <path
            d="m640 480c0-18 30-70 40-70 6 0 10-7 10-15 0-9 6-18 14-21s16-14 19-25c3-10 12-19 21-19s16-4 16-9 11-12 25-15c14-4 25-11 25-16 0-6 9-10 19-10 11 0 22-4 25-9 8-13 66-22 150-22 64 0 80 3 115 27 23 14 50 41 61 58 11 18 28 41 40 51 11 10 20 22 20 27 0 16-26 8-40-13-8-12-21-27-27-35-7-7-13-16-13-21 0-4-21-21-46-37-41-26-50-28-112-23-86 7-132 17-132 28 0 5-12 14-26 19-22 9-24 13-14 25s7 16-15 25c-34 13-33 13-37-7-3-14-20-2-71 50-37 37-67 63-67 57z"
            className="svg-elem-23"
          ></path>
          <path
            d="m1e3 480c0-5 5-10 11-10 5 0 7 5 4 10-3 6-8 10-11 10-2 0-4-4-4-10z"
            className="svg-elem-24"
          ></path>
          <path
            d="m769 414c-11-13-9-14 13-9 15 4 29 2 32-4 9-14 36-14 36-1 0 6-7 10-15 10s-15 5-15 10c0 16-36 12-51-6z"
            className="svg-elem-25"
          ></path>
          <path
            d="m877 359c6-22 23-26 23-5 0 8-6 16-14 19-10 4-12 0-9-14z"
            className="svg-elem-26"
          ></path>
          <path
            d="m1241 354c0-11 3-14 6-6 3 7 2 16-1 19-3 4-6-2-5-13z"
            className="svg-elem-27"
          ></path>
          <path
            d="m904 325c-16-12-17-14-3-15 9 0 19 7 23 15 7 19 5 19-20 0z"
            className="svg-elem-28"
          ></path>
          <path
            d="m1005 160c3-5 11-10 16-10 6 0 7 5 4 10-3 6-11 10-16 10-6 0-7-4-4-10z"
            className="svg-elem-29"
          ></path>
          <path
            d="m1015 60c-3-5-15-10-26-10-10 0-19-4-19-10 0-16 20-12 47 10 14 11 21 20 15 20s-14-4-17-10z"
            className="svg-elem-30"
          ></path>
        </g>
      </svg>
    </div>
  );
}
export default Icon;
