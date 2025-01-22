import { useMemo } from "react";
import { FLOATING_CRYSTAL_DATA } from "../constants";
import { CrystalsContainer, CrystalFloatingImage } from "./styles";
import { randomNumberGenerator } from "@/utils/random-number-generator";

export const Crystals = () => {
  const floatinRanges = useMemo(() => {
    return FLOATING_CRYSTAL_DATA.map((_, i) => {
      return Math.floor(randomNumberGenerator(i) * 100) - 50;
    });
  }, []);

  return (
    <CrystalsContainer>
      {FLOATING_CRYSTAL_DATA.map((crystal, index) => (
        <CrystalFloatingImage
          key={crystal.id}
          src={crystal.image}
          alt={`crystal ${crystal.id}`}
          floatingranges={floatinRanges[index]}
          position={crystal.position}
        />
      ))}
    </CrystalsContainer>
  );
};
