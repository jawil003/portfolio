const generateMetaTags = (
  title: string,
  description: string,
  imageUrl: string
) => {
  let index = 0;
  return [
    <title key={index++}>Jannik Will | {title}</title>,
    <meta
      key={index++}
      name="title"
      content={`Jannik Will | ${title}`}
    />,
    <meta
      key={index++}
      name="description"
      content={description}
    />,
    <meta
      key={index++}
      property="og:type"
      content="website"
    />,
    <meta
      key={index++}
      property="og:url"
      content={process.env.NEXT_PUBLIC_ROOT_URL}
    />,
    <meta
      key={index++}
      property="og:title"
      content={title}
    />,
    <meta
      key={index++}
      property="og:description"
      content={description}
    />,
    <meta
      key={index++}
      property="og:image"
      content={`${process.env.NEXT_PUBLIC_ROOT_URL}/${imageUrl}`}
    />,
    <meta
      key={index++}
      property="twitter:card"
      content="summary_large_image"
    />,
    <meta
      key={index++}
      property="twitter:url"
      content={process.env.NEXT_PUBLIC_ROOT_URL}
    />,
    <meta
      key={index++}
      property="twitter:title"
      content={title}
    />,
    <meta
      key={index++}
      property="twitter:description"
      content={description}
    />,
    <meta
      key={index++}
      property="twitter:image"
      content={`${process.env.NEXT_PUBLIC_ROOT_URL}/${imageUrl}`}
    />,
  ];
};
export default generateMetaTags;
