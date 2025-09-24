import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const navigationItems = [
  { label: "Products", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Contact", href: "#" },
];

const statsData = [
  { value: "3TB", description: "of financial data" },
  { value: "28", description: "valuation methods" },
  { value: "50.000", description: "listed peers" },
  { value: "470.000", description: "private transactions" },
];

const footerLinks = [
  "Listed",
  "Company",
  "Private Company",
  "About Us",
  "Careers Press",
];

const legalLinks = ["Privacy Policy", "Imprint", "Terms of Use"];

const featuresList1 = [
  "SMEs",
  "Local Business",
  "Startups",
  "Public Companies",
];

const featuresList2 = [
  "4 Fast Steps",
  "Quickly Adjustments",
  "Easy Comparisions",
];

const contactInfo = [
  { label: "A:", value: "New Delhi" },
  { label: "E:", value: "test@gmail.com" },
  { label: "P:", value: "+91 999999999" },
];

export const Homepage = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1600px] min-h-[9000px] relative">
      <img
        className="absolute top-[5782px] left-[751px] w-[849px] h-[891px] object-cover"
        alt="Lady"
        src="/figmaAssets/lady-1.png"
      />

      <img
        className="absolute top-[5881px] left-0 w-[1558px] h-[1014px]"
        alt="Mask group"
      />

      <div className="absolute top-[6218px] left-[108px] w-[557px] h-[280px]">
        <div className="absolute top-0 left-[41px] [font-family:'Poppins',Helvetica] font-normal text-[#5f5f5f] text-xl tracking-[0] leading-[60px]">
          Cras congue sapien ac metus, ligula condimentum.
          <br />
          Donec finibus nulla vel ante elementum ultrices.
          <br />
          Phasellus ut risus sed orci suscipit rhoncus.
        </div>

        <img
          className="absolute w-[4.31%] h-[6.86%] top-[28.21%] left-0"
          alt="Vector"
          src="/figmaAssets/vector-1.svg"
        />

        <img
          className="absolute w-[3.77%] h-[7.50%] top-[49.64%] left-0"
          alt="Vector"
          src="/figmaAssets/vector-2.svg"
        />

        <img
          className="top-[18px] absolute left-0 w-[23px] h-[23px]"
          alt="Arrows alt"
          src="/figmaAssets/arrows-alt.svg"
        />

        <Button
          variant="outline"
          className="absolute top-[203px] left-0 px-[60px] py-[25px] border-[#959595] rounded-[200px] h-auto"
        >
          <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#010731] text-lg tracking-[0] leading-[normal]">
            Contact Us Now
          </span>
        </Button>
      </div>

      <img
        className="absolute top-[2751px] left-0 w-[1600px] h-[712px]"
        alt="Rectangle"
        src="/figmaAssets/rectangle-14.svg"
      />

      <div className="absolute top-0 left-0 w-[1600px] h-[842px] bg-[#e4f4f3]" />

      <img
        className="absolute top-0 left-0 w-[1600px] h-[842px] object-cover"
        alt="Rectangle"
        src="/figmaAssets/rectangle-9.png"
      />

      <img
        className="absolute top-[480px] left-[1086px] w-[356px] h-[250px] rounded-[10px] border-8 border-solid border-white object-cover"
        alt="Rectangle"
        src="/figmaAssets/rectangle-7.png"
      />

      <div className="absolute top-[1127px] left-[81px] w-[1436px] h-[1001px]">
        <img
          className="absolute top-0 left-0 w-[640px] h-[1001px]"
          alt="Rectangle"
          src="/figmaAssets/rectangle-5.svg"
        />

        <img
          className="absolute top-[50px] left-[70px] w-[684px] h-[904px] object-cover"
          alt="Image"
          src="/figmaAssets/image-2.png"
        />

        <div className="absolute top-[87px] left-[927px] w-[513px] h-[563px]">
          <img
            className="absolute top-[150px] left-[87px] w-[174px] h-20"
            alt="Rectangle"
            src="/figmaAssets/rectangle-2.svg"
          />

          <div className="absolute top-0 left-0 w-[509px] [font-family:'Poppins',Helvetica] font-bold text-transparent text-[67px] tracking-[0] leading-[67px]">
            <span className="text-[#06629e] leading-[75px]">
              VALUE
              <br />
              COMPANIES
              <br />
              OF{" "}
            </span>

            <span className="text-white leading-[75px]">ANY</span>

            <span className="text-[#06629e] leading-[75px]"> SIZE</span>
          </div>

          <div className="absolute top-[251px] left-0 w-[465px] [font-family:'Poppins',Helvetica] font-normal text-[#5f5f5f] text-base tracking-[0] leading-[normal]">
            You can now value a business in minutes with our powerful all-in-one
          </div>

          <Button
            variant="outline"
            className="absolute top-[506px] left-0 px-[30px] py-[15px] border-[#959595] rounded-[200px] h-auto"
          >
            <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#010731] text-lg tracking-[0] leading-[normal]">
              Learn More
            </span>
          </Button>

          <div className="w-56 absolute top-[317px] left-[19px] h-40">
            <div className="absolute top-0 left-[41px] [font-family:'Poppins',Helvetica] font-normal text-[#5f5f5f] text-xl tracking-[0] leading-10">
              {featuresList1.map((feature, index) => (
                <React.Fragment key={index}>
                  {feature}
                  {index < featuresList1.length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>

            <img
              className="absolute w-[10.71%] h-[12.00%] top-[31.25%] left-0"
              alt="Vector"
              src="/figmaAssets/vector-1.svg"
            />

            <img
              className="absolute w-[9.37%] h-[13.12%] top-[55.62%] left-0"
              alt="Vector"
              src="/figmaAssets/vector-2.svg"
            />

            <img
              className="absolute w-[10.27%] h-[11.50%] top-[81.25%] left-0"
              alt="Vector"
              src="/figmaAssets/vector.svg"
            />

            <img
              className="absolute top-[9px] left-0 w-[23px] h-[23px]"
              alt="Arrows alt"
              src="/figmaAssets/arrows-alt.svg"
            />
          </div>
        </div>
      </div>

      <div className="absolute top-[894px] left-[calc(50.00%_-_520px)] [font-family:'Poppins',Helvetica] font-bold text-black text-[35px] tracking-[1.75px] leading-[79px] whitespace-nowrap">
        TRUSTED BY LEADING COMPANIES AND STARTUPS
      </div>

      <div className="absolute top-[952px] left-[193px] w-[1215px] h-[118px] bg-[url(/figmaAssets/group-6.png)] bg-[100%_100%]" />

      <img
        className="absolute top-[2191px] left-0 w-[1600px] h-[1321px]"
        alt="Rectangle"
        src="/figmaAssets/rectangle-4.svg"
      />

      <img
        className="absolute top-[6673px] left-0 w-[1600px] h-[389px]"
        alt="Rectangle"
        src="/figmaAssets/rectangle-32.svg"
      />

      {contactInfo.map((contact, index) => (
        <div
          key={index}
          className={`absolute top-[${6730 + index * 42}px] left-[1135px] [font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[50px] whitespace-nowrap`}
        >
          {contact.label} {contact.value}
        </div>
      ))}

      <div className="absolute top-[2546px] left-[233px] w-[1116px] h-[87px]">
        <div className="absolute top-0 left-[35px] [font-family:'Poppins',Helvetica] font-normal text-[#ffffff80] text-xl tracking-[0] leading-10 whitespace-nowrap">
          SMEs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Local
          Business&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Startups&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Public Companies
        </div>

        <img
          className="absolute w-[2.15%] h-[22.07%] top-[12.65%] left-[25.36%]"
          alt="Vector"
          src="/figmaAssets/vector-1.svg"
        />

        <img
          className="absolute w-0 h-[24.14%] top-[10.35%] left-[55.82%]"
          alt="Vector"
          src="/figmaAssets/vector-2.svg"
        />

        <img
          className="absolute w-[2.06%] h-[21.15%] top-[12.65%] left-[80.38%]"
          alt="Vector"
          src="/figmaAssets/vector.svg"
        />

        <img
          className="top-[7px] absolute left-0 w-[23px] h-[23px]"
          alt="Arrows alt"
          src="/figmaAssets/arrows-alt.svg"
        />
      </div>

      <img
        className="absolute top-[1201px] left-[582px] w-[310px] h-[230px] rounded-[10px] border-8 border-solid border-white object-cover"
        alt="Rectangle"
        src="/figmaAssets/rectangle-6.png"
      />

      <img
        className="absolute top-[1638px] left-[61px] w-[356px] h-[250px] rounded-[10px] object-cover"
        alt="Rectangle"
        src="/figmaAssets/rectangle-7.png"
      />

      <div className="top-[2430px] left-[calc(50.00%_-_329px)] w-[658px] text-[#ffffff99] text-2xl text-center absolute [font-family:'Poppins',Helvetica] font-normal tracking-[0] leading-[normal]">
        You can now value a business in minutes with our powerful all-in-one
      </div>

      <img
        className="absolute top-[2312px] left-[645px] w-[397px] h-20"
        alt="Rectangle"
        src="/figmaAssets/rectangle-2.svg"
      />

      <div className="absolute top-[2317px] left-[calc(50.00%_-_438px)] [font-family:'Poppins',Helvetica] font-bold text-white text-[67px] text-center tracking-[0] leading-[75px] whitespace-nowrap">
        PRIVATE&nbsp;&nbsp;COMPANY&nbsp;&nbsp;DATA
      </div>

      <img
        className="absolute top-[2640px] left-[calc(50.00%_-_410px)] w-[820px] h-[450px] rounded-[10px] object-cover"
        alt="Rectangle"
        src="/figmaAssets/rectangle-16.png"
      />

      <img
        className="absolute top-[2691px] left-[calc(50.00%_+_438px)] w-52 h-[148px] rounded-[10px] object-cover"
        alt="Rectangle"
        src="/figmaAssets/rectangle-19.png"
      />

      <img
        className="absolute top-[2868px] left-[calc(50.00%_-_646px)] w-52 h-[148px] rounded-[10px] object-cover"
        alt="Rectangle"
        src="/figmaAssets/rectangle-18.png"
      />

      <img
        className="absolute top-[2868px] left-[calc(50.00%_+_438px)] w-52 h-[148px] rounded-[10px] object-cover"
        alt="Rectangle"
        src="/figmaAssets/rectangle-20.png"
      />

      <img
        className="absolute top-[2691px] left-[154px] w-52 h-[148px]"
        alt="Mask group"
        src="/figmaAssets/mask-group.png"
      />

      <Card className="absolute top-[3071px] left-[calc(50.00%_-_332px)] w-[685px] h-[137px] rounded-[5px] border border-solid border-white shadow-[0px_4px_8px_#00000040]">
        <CardContent className="p-0">
          <div className="absolute top-[-10px] left-[-10px] w-[685px] h-[137px] bg-[#f9f9f9] rounded-[5px] shadow-[0px_0px_20px_#00000026]" />

          <div className="absolute top-[20px] left-[20px] w-[406px] [font-family:'Poppins',Helvetica] font-semibold text-[#21264b] text-base tracking-[0] leading-7">
            &quot; Glauben oder nicht glauben, Lorem Ipsum ist nicht nur ein
            zufälliger Text. Er hat Wurzeln aus der Lateinischen &quot;
          </div>

          <div className="absolute top-[12px] left-[513px] w-[148px] h-[97px] flex flex-col">
            <img
              className="ml-[47px] w-[51px] h-[51px] object-cover"
              alt="Ellipse"
              src="/figmaAssets/ellipse-2-1.png"
            />

            <div className="ml-[26px] w-[92px] h-[21px] mt-1.5 text-black [font-family:'Poppins',Helvetica] font-semibold text-sm tracking-[0] leading-[normal]">
              Kate Nguyen
            </div>

            <div className="w-36 h-[18px] mt-px [font-family:'Poppins',Helvetica] font-light text-[#646464] text-xs tracking-[0] leading-[normal]">
              UX/UI Web/App Designer
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="absolute top-[3635px] left-[156px] w-[513px] h-[523px]">
        <img
          className="absolute top-[71px] left-[82px] w-[364px] h-20"
          alt="Rectangle"
          src="/figmaAssets/rectangle-2.svg"
        />

        <div className="absolute top-0 left-0 w-[509px] [font-family:'Poppins',Helvetica] font-bold text-transparent text-[67px] tracking-[0] leading-[75px]">
          <span className="text-[#06629e]">FAST ACCESS TO </span>

          <span className="text-white">PREMIUM</span>

          <span className="text-[#06629e]"> DATA</span>
        </div>

        <div className="absolute top-[251px] left-0 w-[465px] [font-family:'Poppins',Helvetica] font-normal text-[#5f5f5f] text-base tracking-[0] leading-[normal]">
          You can now value a business in minutes with our powerful all-in-one
        </div>

        <Button
          variant="outline"
          className="absolute top-[466px] left-0 px-[30px] py-[15px] border-[#959595] rounded-[200px] h-auto"
        >
          <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#010731] text-lg tracking-[0] leading-[normal]">
            Learn More
          </span>
        </Button>

        <div className="w-[246px] absolute top-[317px] left-[19px] h-40">
          <div className="absolute top-0 left-[41px] [font-family:'Poppins',Helvetica] font-normal text-[#5f5f5f] text-xl tracking-[0] leading-10">
            {featuresList2.map((feature, index) => (
              <React.Fragment key={index}>
                {feature}
                {index < featuresList2.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>

          <img
            className="absolute w-[9.76%] h-[12.00%] top-[31.25%] left-0"
            alt="Vector"
            src="/figmaAssets/vector-1.svg"
          />

          <img
            className="absolute w-[8.54%] h-[13.12%] top-[55.62%] left-0"
            alt="Vector"
            src="/figmaAssets/vector-2.svg"
          />

          <img
            className="absolute top-[9px] left-0 w-[23px] h-[23px]"
            alt="Arrows alt"
            src="/figmaAssets/arrows-alt.svg"
          />
        </div>
      </div>

      <div className="absolute top-[3579px] left-[765px] w-[669px] h-[669px] bg-white rounded-[334.5px] border-[70px] border-solid border-[#f3f3f3]" />

      <div className="absolute top-[3754px] left-[940px] w-80 h-80 bg-[#f3f3f3] rounded-[160px]" />

      <img
        className="absolute top-[3854px] left-[calc(50.00%_-_169px)] w-[336px] h-[424px] rounded-[10px] object-cover"
        alt="Rectangle"
        src="/figmaAssets/rectangle-24.png"
      />

      <img
        className="absolute top-[3595px] left-[calc(50.00%_+_245px)] w-[450px] h-[281px] rounded-[10px] object-cover"
        alt="Rectangle"
        src="/figmaAssets/rectangle-25.png"
      />

      <Card className="absolute top-[4091px] left-[1027px] w-[437px] h-[216px]">
        <CardContent className="p-0">
          <div className="absolute top-[17px] left-[calc(50.00%_-_212px)] w-[429px] h-[199px] rounded-[5px] border border-solid border-[#010630]" />

          <div className="absolute top-0 left-[calc(50.00%_-_218px)] w-[428px] h-52 bg-[#010630] rounded-[5px] shadow-[0px_0px_20px_#00000026]" />

          <div className="absolute top-[26px] left-[33px] w-[366px] [font-family:'Poppins',Helvetica] font-semibold text-white text-base tracking-[0] leading-7">
            &quot; Glauben oder nicht glauben, Lorem Ipsum ist nicht nur ein
            zufälliger Text. Er hat Wurzeln aus der Lateinischen &quot;
          </div>

          <div className="absolute top-[133px] left-[33px] w-[217px] h-[51px]">
            <img
              className="absolute top-0 left-0 w-[51px] h-[51px] object-cover"
              alt="Ellipse"
              src="/figmaAssets/ellipse-2-1.png"
            />

            <div className="absolute top-1.5 left-[69px] text-white [font-family:'Poppins',Helvetica] font-semibold text-sm tracking-[0] leading-[normal]">
              Kate Nguyen
            </div>

            <div className="absolute top-7 left-[69px] [font-family:'Poppins',Helvetica] font-light text-[#ffffffb2] text-xs tracking-[0] leading-[normal]">
              UX/UI Web/App Designer
            </div>
          </div>
        </CardContent>
      </Card>

      <img
        className="absolute top-[3864px] left-[1038px] w-[135px] h-[135px] object-cover"
        alt="Running"
        src="/figmaAssets/running-1.png"
      />

      <div className="absolute top-[4399px] -left-px w-[1600px] h-[986px] bg-[#f9f9f9]" />

      <div className="absolute top-[4541px] left-[118px] w-[859px] h-[292px]">
        <img
          className="absolute top-[71px] left-0 w-[484px] h-20"
          alt="Rectangle"
          src="/figmaAssets/rectangle-2.svg"
        />

        <div className="absolute top-0 left-[35px] w-[820px] [font-family:'Poppins',Helvetica] font-bold text-transparent text-[67px] tracking-[0] leading-[75px]">
          <span className="text-[#06629e]">THE NEW WAY TO VALUE </span>

          <span className="text-white">COMPANIES</span>
        </div>

        <div className="top-[181px] left-[35px] w-[465px] text-[#5f5f5f] text-base absolute [font-family:'Poppins',Helvetica] font-normal tracking-[0] leading-[normal]">
          You can now value a business in minutes with our powerful all-in-one
        </div>
      </div>

      <div className="absolute top-[5966px] left-16 w-[604px] h-[271px]">
        <img
          className="absolute top-[72px] left-0 w-[444px] h-20"
          alt="Rectangle"
          src="/figmaAssets/rectangle-2.svg"
        />

        <div className="absolute top-0 left-[39px] w-[563px] [font-family:'Poppins',Helvetica] font-bold text-transparent text-[67px] tracking-[0] leading-[75px]">
          <span className="text-[#06629e]">HOW CAN WE </span>

          <span className="text-white">HELP YOUR</span>

          <span className="text-[#06629e]"> ORGANIZATION?</span>
        </div>
      </div>

      <div className="absolute top-[5438px] left-[calc(50.00%_-_318px)] w-[949px] h-[269px]">
        <img
          className="absolute top-0 left-[226px] w-[196px] h-[70px]"
          alt="Rectangle"
          src="/figmaAssets/rectangle-2.svg"
        />

        <div className="absolute top-0 left-[125px] w-[820px] [font-family:'Poppins',Helvetica] font-bold text-transparent text-5xl tracking-[0] leading-[75px]">
          <span className="text-[#06629e]">OUR&nbsp;&nbsp;</span>

          <span className="text-white">STATS</span>
        </div>

        <div className="top-[104px] left-[calc(50.00%_-_474px)] w-[559px] text-[#5f5f5f] text-base whitespace-nowrap absolute [font-family:'Poppins',Helvetica] font-normal tracking-[0] leading-[normal]">
          You can now value a business in minutes with our powerful all-in-one
        </div>
      </div>

      <img
        className="absolute top-[4820px] left-[134px] w-[833px] h-[449px] rounded-[10px] object-cover"
        alt="Rectangle"
        src="/figmaAssets/rectangle-30.png"
      />

      <img
        className="absolute top-[4820px] left-[1004px] w-[475px] h-[301px] rounded-[10px] object-cover"
        alt="Rectangle"
        src="/figmaAssets/rectangle-31.png"
      />

      {statsData.map((stat, index) => (
        <div
          key={index}
          className={`absolute top-[5617px] left-[${117 + index * 323}px] w-[${index === 0 ? 152 : index === 1 ? 174 : index === 2 ? 225 : 260}px] h-28`}
        >
          <div
            className={`absolute top-0 left-[${index === 1 ? 46 : index === 3 ? 0 : index === 2 ? 0 : 15}px] [font-family:'Poppins',Helvetica] font-bold text-[#06629e] text-[64px] tracking-[0] leading-[normal]`}
          >
            {stat.value}
          </div>

          <div
            className={`absolute top-[85px] left-[${index === 2 ? 59 : index === 3 ? 37 : 0}px] [font-family:'Poppins',Helvetica] font-normal text-[#7a7a7a] text-lg tracking-[0] leading-[normal]`}
          >
            {stat.description}
          </div>
        </div>
      ))}

      <div className="absolute top-[6736px] left-[562px] [font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[50px]">
        {footerLinks.map((link, index) => (
          <React.Fragment key={index}>
            {link}
            {index < footerLinks.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>

      <div className="absolute top-[8440px] left-32 [font-family:'Poppins',Helvetica] font-normal text-[#ffffffb2] text-lg tracking-[0] leading-[50px] whitespace-nowrap">
        © 2023 Copyright Kate Nguyen. All Rights Reserved.
      </div>

      <div className="absolute top-[6736px] left-[833px] [font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[50px]">
        {legalLinks.map((link, index) => (
          <React.Fragment key={index}>
            {link}
            {index < legalLinks.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>

      <img
        className="absolute top-[6919px] left-[1110px] w-[300px] h-12"
        alt="Group"
        src="/figmaAssets/group-24.png"
      />

      <img
        className="absolute top-[7633px] left-32 w-[1350px] h-px object-cover"
        alt="Line"
        src="/figmaAssets/line-1.svg"
      />

      <div
        className="absolute top-[269px] left-28 w-[699px] h-[408px]
 flex flex-col"
      >
        <div className="ml-[17px] w-[678px] h-[229px] [font-family:'Poppins',Helvetica] font-bold text-transparent text-7xl tracking-[0] leading-[79px]">
          <span className="text-[#06629e]">
            VALUATIONS MADE SIMPLE WITH
            <br />{" "}
          </span>

          <span className="text-white">EQTBOOM</span>
        </div>

        <img
          className="w-[430px] h-[84px] mt-1.5"
          alt="Rectangle"
          src="/figmaAssets/rectangle-2.svg"
        />

        <div className="ml-9 w-[410px] h-[42px] mt-[47px] [font-family:'Poppins',Helvetica] font-normal text-[#06629e] text-xl tracking-[0] leading-[normal]">
          Power your valuation with our expertise.
        </div>
      </div>

      <div className="absolute top-0.5 left-0 w-[1603px] h-[104px] bg-white" />

      <Button
        variant="outline"
        className="absolute top-8 left-[1286px] w-[163px] h-[43px] px-[25px] py-2.5 border-black rounded-[200px] h-auto"
      >
        <span className="[font-family:'Poppins',Helvetica] font-medium text-[#010630] text-[15px] tracking-[0] leading-[normal]">
          Log In / Sign Up
        </span>
      </Button>

      <img
        className="top-[13px] left-[75px] w-[90px] h-24 absolute object-cover"
        alt="Logo"
        src="/figmaAssets/logo-3.png"
      />

      <img
        className="top-[6719px] left-[77px] w-[266px] h-[284px] absolute object-cover"
        alt="Logo"
        src="/figmaAssets/logo-3.png"
      />

      <nav className="absolute top-[38px] left-[calc(50.00%_-_293px)] w-[597px] h-[27px] flex">
        {navigationItems.map((item, index) => (
          <div
            key={index}
            className={`${index === 0 ? "w-[81px]" : index === 1 ? "w-[82px] ml-12" : index === 2 ? "w-[94px] ml-[43px]" : index === 3 ? "w-[62px] ml-14" : "w-[74px] ml-[47px]"} h-[27px] [font-family:'Poppins',Helvetica] font-medium text-black text-lg tracking-[0] leading-[normal]`}
          >
            {item.label}
          </div>
        ))}
      </nav>
    </div>
  );
};
