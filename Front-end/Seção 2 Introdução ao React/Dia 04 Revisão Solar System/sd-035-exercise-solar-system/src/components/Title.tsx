type TitleProps = {
  headline: string,
};

export default function Title({ headline }: TitleProps) {
  return (
    <h2>
      { headline }
    </h2>
  );
}
