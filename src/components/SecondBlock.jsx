import { motion, useScroll, useTransform, useSpring } from "framer-motion";

function SecondBlock() {
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  useSpring(pathLength, { stiffness: 100, damping: 20 });


  return (
    <>
      <div className="grid grid-cols-1 place-items-center">
        <div className="absolute z-10">
          <motion.svg
            height="95vh"
            width="95vw"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="80"
              y="130"
              fill="white"
              fontSize="25"
              fontFamily="Red Rose"
            >
              Premium Quality Material
            </text>
            <defs>
              <marker
                id="circle"
                markerWidth="8"
                markerHeight="8"
                refX="5"
                refY="5"
              >
                <circle
                  cx="250"
                  cy="250"
                  r="2.5"
                  fill="white"
                  stroke="black"
                  strokeWidth="1px"
                />
              </marker>
            </defs>
            <motion.path
              d="M250,150 L350,240 L550,240"
              stroke="white"
              strokeWidth="3"
              fill="none"
              style={{ pathLength }}
            />
            <circle
              cx="250"
              cy="150"
              r="6"
              fill="white"
              stroke="black"
              strokeWidth="2"
            />
            <circle
              cx="550"
              cy="240"
              r="6"
              fill="white"
              stroke="black"
              strokeWidth="2"
            />

            {/* 2nd SVG Starts */}

            <text
              x="1100"
              y="130"
              fill="white"
              fontSize="25"
              fontFamily="Red Rose"
            >
              100% Perfect Fitting
            </text>
            <defs>
              <marker
                id="circle"
                markerWidth="8"
                markerHeight="8"
                refX="5"
                refY="5"
              >
                <circle
                  cx="250"
                  cy="250"
                  r="2.5"
                  fill="white"
                  stroke="black"
                  strokeWidth="1px"
                />
              </marker>
            </defs>
            <motion.path
              d="M1220,150 L1100,240 L920,240"
              stroke="white"
              strokeWidth="3"
              fill="none"
              style={{ pathLength }}
            />
            <circle
              cx="1220"
              cy="150"
              r="6"
              fill="white"
              stroke="black"
              strokeWidth="2"
            />
            <circle
              cx="920"
              cy="240"
              r="6"
              fill="white"
              stroke="black"
              strokeWidth="2"
            />

            {/* 3rd SVG Starts */}

            <text
              x="110"
              y="585"
              fill="white"
              fontSize="25"
              fontFamily="Red Rose"
            >
              High Padded Seating
            </text>
            <defs>
              <marker
                id="circle"
                markerWidth="8"
                markerHeight="8"
                refX="5"
                refY="5"
              >
                <circle
                  cx="250"
                  cy="250"
                  r="2.5"
                  fill="white"
                  stroke="black"
                  strokeWidth="1px"
                />
              </marker>
            </defs>
            <motion.path
              d="M250,550 L350,450 L550,450"
              stroke="white"
              strokeWidth="3"
              fill="none"
              style={{ pathLength }}
            />
            <circle
              cx="550"
              cy="450"
              r="6"
              fill="white"
              stroke="black"
              strokeWidth="2"
            />
            <circle
              cx="250"
              cy="550"
              r="6"
              fill="white"
              stroke="black"
              strokeWidth="2"
            />

            {/*4th SVG Starts  */}

            <text
              x="1140"
              y="575"
              fill="white"
              fontSize="25"
              fontFamily="Red Rose"
            >
              Flawless Stitches
            </text>
            <defs>
              <marker
                id="circle"
                markerWidth="8"
                markerHeight="8"
                refX="5"
                refY="5"
              >
                <circle
                  cx="5"
                  cy="5"
                  r="2.5"
                  fill="white"
                  stroke="black"
                  strokeWidth="1px"
                />
              </marker>
            </defs>
            <motion.path
              d="M1240,540 L1100,450 L920,450"
              stroke="white"
              strokeWidth="3"
              fill="none"
              style={{ pathLength }}
            />
            <circle
              cx="920"
              cy="450"
              r="6"
              fill="white"
              stroke="black"
              strokeWidth="2"
            />
            <circle
              cx="1240"
              cy="540"
              r="6"
              fill="white"
              stroke="black"
              strokeWidth="2"
            />
          </motion.svg>
        </div>
        {/* <img src={Svg} alt="" className="absolute z-10" /> */}
        <div className="w-full grid grid-cols-1 place-items-center">
          <div className="w-1/2 p-10 drop-shadow-[10px_40px_25px_#000000]">
            <img src="./src/assets/seat.png" alt="" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
export default SecondBlock;
