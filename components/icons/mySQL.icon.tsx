interface Props {
  fontSize: "large" | "normal" | "small";
}
const MySQLIcon: React.FC<Props> = (props: Props) => {
  return (
    <svg
      style={{
        fontSize:
          props.fontSize === "small"
            ? "0.5rem"
            : props.fontSize === "normal"
            ? "1rem"
            : "3.5rem",
      }}
      width="1em"
      height="1em"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512.003 512.003"
    >
      <g>
        <path
          style={{ fill: "#546E7A" }}
          d="M510.042,495.168c-8.771-12.365-22.979-22.625-38.021-33.49
		c-16.198-11.677-32.833-23.688-41.167-37.646c31.615-6.604,71.615-18.573,73.542-19.146c3.438-1.031,6.135-3.729,7.156-7.167
		c1.031-3.438,0.26-7.167-2.052-9.917c-2.063-2.448-50.49-59.271-128.656-87.146c-3.448-6.906-7.292-15.76-11.76-26
		C337.604,202.429,272.25,52.533,99.823,32.366C86.083,23.085,50.073,0.002,32,0.002c-22.427,0-32,9.573-32,32
		c0,10.917,8.885,23.677,23.375,43.604c7.083,9.74,18.938,26.042,19.292,31.063c0,17.458,20.25,73.979,40.615,98.156
		c-0.583,1.24-1.167,2.458-1.74,3.667C72.521,227.502,64,245.46,64,288.002c0,56.021,26.833,85.333,53.333,85.333
		c16.448,0,24.635-18.667,28.573-40.521c14.615,29.656,38.49,68.292,71.938,91.906c4.823,3.375,11.479,2.229,14.875-2.563
		c3.396-4.823,2.25-11.469-2.563-14.875c-53.042-37.438-81.073-121.74-81.354-122.594c-1.625-4.979-6.729-8.063-11.813-7.219
		c-5.177,0.823-8.99,5.292-8.99,10.531c0,29.292-5.583,60.5-10.667,64c-15.385,0-32-24.469-32-64
		c0-37.74,6.833-52.135,15.479-70.365c1.615-3.406,3.281-6.906,4.938-10.635c1.906-4.302,0.781-9.344-2.781-12.417
		C86.531,180.429,64,120.835,64,106.668c0-10.917-8.885-23.677-23.375-43.604c-7.083-9.74-18.938-26.042-19.292-31.063
		c0-10.667,0-10.667,10.667-10.667c8.646,0,36.823,15.635,57.969,30.135c1.448,0.99,3.125,1.615,4.885,1.802
		c162.115,17.583,222.333,155.708,254.677,229.917c5.448,12.5,10.156,23.302,14.406,31.198c1.281,2.385,3.417,4.188,5.969,5.052
		c53.24,18.042,92.938,51.76,111.542,69.865c-18.167,5.094-47.177,12.844-67.198,16.177c-2.938,0.49-5.542,2.188-7.167,4.677
		c-1.635,2.49-2.156,5.542-1.427,8.427c6.552,26.25,31.698,44.396,53.875,60.396c13.573,9.792,26.385,19.042,33.094,28.521
		c2.083,2.938,5.375,4.5,8.719,4.5c2.135,0,4.281-0.635,6.156-1.958C512.302,506.637,513.448,499.981,510.042,495.168z"
        />
        <path
          style={{ fill: "#546E7A" }}
          d="M96,85.335c0,5.896,4.771,10.667,10.667,10.667c5.885,0,10.667,4.781,10.667,10.667
		c0,5.896,4.771,10.667,10.667,10.667c5.896,0,10.667-4.771,10.667-10.667c0-17.646-14.354-32-32-32
		C100.771,74.668,96,79.439,96,85.335z"
        />
      </g>
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="-48.9542"
        y1="640.6776"
        x2="-20.5711"
        y2="627.4446"
        gradientTransform="matrix(21.3333 0 0 -21.3333 996.3027 13791.7012)"
      >
        <stop
          offset="0"
          style={{
            stopColor: "#FFFFFF",
            stopOpacity: 0.2,
          }}
        />
        <stop
          offset="1"
          style={{
            stopColor: "#FFFFFF",
            stopOpacity: 0,
          }}
        />
      </linearGradient>
      <path
        style={{ fill: "url(#SVGID_1_)" }}
        d="M510.042,495.168c-8.771-12.365-22.979-22.625-38.021-33.49
	c-16.198-11.677-32.833-23.688-41.167-37.646c31.615-6.604,71.615-18.573,73.542-19.146c3.438-1.031,6.135-3.729,7.156-7.167
	c1.031-3.438,0.26-7.167-2.052-9.917c-2.063-2.448-50.49-59.271-128.656-87.146c-3.448-6.906-7.292-15.76-11.76-26
	C337.604,202.429,272.25,52.533,99.823,32.366C86.083,23.085,50.073,0.002,32,0.002c-22.427,0-32,9.573-32,32
	c0,10.917,8.885,23.677,23.375,43.604c7.083,9.74,18.938,26.042,19.292,31.063c0,17.458,20.25,73.979,40.615,98.156
	c-0.583,1.24-1.167,2.458-1.74,3.667C72.521,227.502,64,245.46,64,288.002c0,56.021,26.833,85.333,53.333,85.333
	c16.448,0,24.635-18.667,28.573-40.521c14.615,29.656,38.49,68.292,71.938,91.906c4.823,3.375,11.479,2.229,14.875-2.563
	c3.396-4.823,2.25-11.469-2.563-14.875c-53.042-37.438-81.073-121.74-81.354-122.594c-1.625-4.979-6.729-8.063-11.813-7.219
	c-5.177,0.823-8.99,5.292-8.99,10.531c0,29.292-5.583,60.5-10.667,64c-15.385,0-32-24.469-32-64c0-37.74,6.833-52.135,15.479-70.365
	c1.615-3.406,3.281-6.906,4.938-10.635c1.906-4.302,0.781-9.344-2.781-12.417C86.531,180.429,64,120.835,64,106.668
	c0-10.917-8.885-23.677-23.375-43.604c-7.083-9.74-18.938-26.042-19.292-31.063c0-10.667,0-10.667,10.667-10.667
	c8.646,0,36.823,15.635,57.969,30.135c1.448,0.99,3.125,1.615,4.885,1.802c162.115,17.583,222.333,155.708,254.677,229.917
	c5.448,12.5,10.156,23.302,14.406,31.198c1.281,2.385,3.417,4.188,5.969,5.052c53.24,18.042,92.938,51.76,111.542,69.865
	c-18.167,5.094-47.177,12.844-67.198,16.177c-2.938,0.49-5.542,2.188-7.167,4.677c-1.635,2.49-2.156,5.542-1.427,8.427
	c6.552,26.25,31.698,44.396,53.875,60.396c13.573,9.792,26.385,19.042,33.094,28.521c2.083,2.938,5.375,4.5,8.719,4.5
	c2.135,0,4.281-0.635,6.156-1.958C512.302,506.637,513.448,499.981,510.042,495.168z M96,85.335c0,5.896,4.771,10.667,10.667,10.667
	c5.885,0,10.667,4.781,10.667,10.667c0,5.896,4.771,10.667,10.667,10.667c5.896,0,10.667-4.771,10.667-10.667
	c0-17.646-14.354-32-32-32C100.771,74.668,96,79.439,96,85.335z"
      />
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};
export default MySQLIcon;
