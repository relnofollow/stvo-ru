import styles from "./styles.module.css";

import { useRef, useState } from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
  useClick,
} from "@floating-ui/react";
import { FloatingArrow, arrow } from "@floating-ui/react";
import Link from "@docusaurus/Link";

const ARROW_HEIGHT = 7;

export default function TrafficSign({ sign, title, noLink }) {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "top",
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5 + ARROW_HEIGHT),
      flip({
        fallbackAxisSideDirection: "start",
      }),
      shift(),
      arrow({
        element: arrowRef,
      }),
    ],
  });

  // Event listeners to change the open state
  const click = useClick(context);
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    focus,
    dismiss,
    role,
  ]);

  const trafficSignLink = noLink ? null : getTrafficSignLink(sign);

  function getTrafficSignLink(sign: string): string | null {
    let appendixNumber: number | undefined;
    const signFirstDigit = Number(sign[0]);
    if (signFirstDigit === 1) {
      appendixNumber = 1;
    }
    if (signFirstDigit === 2) {
      appendixNumber = 2;
    }
    if (signFirstDigit >= 3 && signFirstDigit <= 5) {
      appendixNumber = 3;
    }
    if (signFirstDigit === 6) {
      appendixNumber = 4;
    }

    if (!appendixNumber) {
      return null;
    }

    return `/docs/appendix-${appendixNumber}#sign-${sign}`;
  }

  return (
    <>
      <button
        ref={refs.setReference}
        className={styles.button}
        {...getReferenceProps()}
      >
        {title ?? sign}
      </button>
      <FloatingPortal>
        {isOpen && (
          <div
            className={[styles.tooltip, "padding--sm"].join(" ")}
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            <FloatingArrow
              ref={arrowRef}
              context={context}
              className={styles.tooltipArrow}
              strokeWidth={1}
              fill="#fff"
            />
            <div className={styles.tooltipContent}>
              <img src={`/img/signs/sign_${sign}.jpg`} alt={`Знак ${sign}`} />
              {trafficSignLink && (
                <Link to={trafficSignLink} className={styles.tooltipLink}>
                  Знак {sign}
                </Link>
              )}
            </div>
          </div>
        )}
      </FloatingPortal>
    </>
  );
}
