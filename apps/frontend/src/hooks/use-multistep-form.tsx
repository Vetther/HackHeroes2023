import React, { useState } from "react";

export function useMultistepForm(steps: React.ReactElement[]) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [lastMaxStepIndex, setLastMaxStepIndex] = useState(0);

    function next() {
        setCurrentStepIndex((i) => {
            if (i >= steps.length - 1) return i;
            return i + 1;
        });
        setLastMaxStepIndex((i) => {
            if (i >= steps.length - 1) return i;
            if (currentStepIndex < lastMaxStepIndex) return i;
            return i + 1;
        });
    }

    function back() {
        setCurrentStepIndex((i) => {
            if (i <= 0) return i;
            return i - 1;
        });
    }

    function goTo(index: number) {
        if (index > lastMaxStepIndex) {
            setCurrentStepIndex(currentStepIndex);
        } else {
            setCurrentStepIndex(index);
            if (index > lastMaxStepIndex) {
                setLastMaxStepIndex(index);
            }
        }
    }

    return {
        currentStepIndex,
        lastMaxStepIndex,
        step: steps[currentStepIndex],
        steps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1,
        goTo,
        next,
        back,
    };
}
