import { useState } from "react";

// UI
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TangoCarouselCard() {
  const [isVisibleAnswer, setIsVisibleAnswer] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined);
  return (
    <Card className={isCorrect ? "border-red-500" : ""}>
      <CardContent className="flex flex-col aspect-[3/4] md:aspect-[3/2] items-center justify-center p-6 md:py-24">
        <p className="scroll-m-20 pb-4 text-2xl md:text-3xl font-semibold tracking-tight first:mt-0">
          previous
        </p>
        <div className="flex flex-col gap-2 items-center mb-4">
          <Button
            size="sm"
            onClick={() => setIsVisibleAnswer(!isVisibleAnswer)}
          >
            {isVisibleAnswer ? "解答を隠す" : "解答を確認"}
          </Button>
          {isVisibleAnswer && <p>以前の</p>}
        </div>
        <div className="flex gap-4 mt-auto">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsCorrect(false)}
          >
            不正解
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => setIsCorrect(true)}
          >
            正解
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
