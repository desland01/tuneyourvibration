import React, { useEffect, useMemo, useRef, useState } from "react";

interface TabItem {
  name: string;
  content: React.ReactNode;
}

const Tabs = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState<number>(0);
  const [defaultFocus, setDefaultFocus] = useState<boolean>(false);

  const tabRefs: React.RefObject<HTMLElement[]> = useRef([]);
  useEffect(() => {
    if (defaultFocus) {
      //@ts-ignore
      tabRefs.current[active]?.focus();
    } else {
      setDefaultFocus(true);
    }
  }, [active, defaultFocus]);

  const tabLinks: TabItem[] = useMemo(() => {
    const nodes = React.Children.toArray(children).filter(
      (node): node is React.ReactElement => React.isValidElement(node),
    );

    return nodes
      .map((node) => {
        const name =
          (node.props && (node.props["data-name"] || node.props.name)) || "";
        return {
          name,
          content: node.props?.children ?? null,
        };
      })
      .filter((item) => item.name.length > 0);
  }, [children]);

  const handleKeyDown = (
    event: React.KeyboardEvent<EventTarget>,
    index: number,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      setActive(index);
    } else if (event.key === "ArrowRight") {
      setActive((active + 1) % tabLinks.length);
    } else if (event.key === "ArrowLeft") {
      setActive((active - 1 + tabLinks.length) % tabLinks.length);
    }
  };

  return (
    <div className="overflow-hidden rounded-lg border border-border dark:border-darkmode-border">
      <ul className="glass-t-borderless m-0 list-none flex border-b border-border dark:border-darkmode-border">
        {tabLinks.map((item, index) => (
          <li
            key={item.name}
            className={`my-0 px-8 cursor-pointer border-b-[3px] pt-2 pb-1 text-lg text-txt-s dark:text-darkmode-txt-s border-border dark:border-darkmode-border 
                ${index === active && "border-b-[3px] text-txt-p dark:text-darkmode-txt-p border-txt-p dark:border-darkmode-txt-p"}
              `}
            role="tab"
            tabIndex={index === active ? 0 : -1}
            onKeyDown={(event) => handleKeyDown(event, index)}
            onClick={() => setActive(index)}
            //@ts-ignore
            ref={(ref) => (tabRefs.current[index] = ref)}
            aria-selected={index === active}
          >
            {item.name}
          </li>
        ))}
      </ul>
      {tabLinks.map((item, i) => (
        <div
          className={active === i ? "tab-content block px-5" : "hidden"}
          key={item.name}
        >
          <div className="space-y-4">{item.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
