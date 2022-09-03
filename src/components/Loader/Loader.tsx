import { ThreeDots } from "react-loader-spinner";

export const Loader: React.FC = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#188ce8"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ display: "flex", justifyContent: "center" }}
      //@ts-ignore
      wrapperClassName=""
      visible={true}
    />
  );
};
