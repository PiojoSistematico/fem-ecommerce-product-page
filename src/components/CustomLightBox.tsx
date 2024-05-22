import {
  Button,
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import { IconClose, IconNext, IconPrevious } from "./Icons";
import imgProd1 from "../assets/images/image-product-1.jpg";
import imgProd2 from "../assets/images/image-product-2.jpg";
import imgProd3 from "../assets/images/image-product-3.jpg";
import imgProd4 from "../assets/images/image-product-4.jpg";
import imgProdTh1 from "../assets/images/image-product-1-thumbnail.jpg";
import imgProdTh2 from "../assets/images/image-product-2-thumbnail.jpg";
import imgProdTh3 from "../assets/images/image-product-3-thumbnail.jpg";
import imgProdTh4 from "../assets/images/image-product-4-thumbnail.jpg";

const images = [imgProd1, imgProd2, imgProd3, imgProd4];
const imagesTh = [imgProdTh1, imgProdTh2, imgProdTh3, imgProdTh4];
type CustomModalProps = {
  index: number;
  handlePrev: () => void;
  handleNext: () => void;
  handlePick: (id: number) => void;
};

const CustomModal: React.FunctionComponent<CustomModalProps> = ({
  index,
  handlePrev,
  handleNext,
  handlePick,
}) => {
  return (
    <DialogTrigger>
      <Button className="flex flex-row items-center gap-2 font-medium text-primary-2">
        <img
          src={images[index - 1]}
          alt=""
          className="max-h-[50vh] w-full object-contain"
        />
      </Button>
      <ModalOverlay className="fixed inset-0 flex min-h-full items-center justify-center overflow-y-auto bg-black/75">
        <Modal className="w-full max-w-md overflow-hidden rounded-2xl p-4 align-middle">
          <Dialog role="alertdialog" className="relative flex flex-col gap-4">
            {({ close }) => (
              <>
                <Button
                  className="self-end text-neutral-5 hover:text-primary-1 focus-visible:text-primary-1"
                  onPress={close}
                >
                  <IconClose></IconClose>
                </Button>
                <picture className="max-w-[450px] overflow-hidden rounded-3xl ">
                  <img
                    src={images[index - 1]}
                    alt=""
                    className="w-full object-contain"
                  />
                </picture>
                <div className="absolute left-0 top-1/3 flex w-full translate-y-3/4 flex-row items-center justify-between">
                  <Button
                    onPress={handlePrev}
                    className="flex h-12 w-12 flex-row items-center justify-center rounded-full bg-neutral-5 hover:text-primary-1 focus-visible:text-primary-1"
                  >
                    <IconPrevious></IconPrevious>
                  </Button>
                  <Button
                    onPress={handleNext}
                    className="flex h-12 w-12 flex-row items-center justify-center rounded-full bg-neutral-5 hover:text-primary-1 focus-visible:text-primary-1"
                  >
                    <IconNext></IconNext>
                  </Button>
                </div>
                <ul className="hidden max-w-[450px] md:flex md:flex-row md:items-center md:gap-4">
                  <li>
                    <Button
                      onPress={() => handlePick(1)}
                      className={`relative overflow-hidden rounded-lg hover:opacity-70 focus-visible:opacity-70 ${index == 1 ? "border-2 border-solid border-primary-1" : ""}`}
                    >
                      {index == 1 && (
                        <div className="absolute h-full w-full  bg-primary-2 opacity-60"></div>
                      )}
                      <img
                        className="w-full object-contain"
                        src={imagesTh[0]}
                        alt=""
                      />
                    </Button>
                  </li>
                  <li>
                    <Button
                      onPress={() => handlePick(2)}
                      className={`relative overflow-hidden rounded-lg hover:opacity-70 focus-visible:opacity-70 ${index == 2 ? "border-2 border-solid border-primary-1" : ""}`}
                    >
                      {index == 2 && (
                        <div className="absolute h-full w-full  bg-primary-2 opacity-60"></div>
                      )}
                      <img
                        className="w-full object-contain"
                        src={imagesTh[1]}
                        alt=""
                      />
                    </Button>
                  </li>
                  <li>
                    <Button
                      onPress={() => handlePick(3)}
                      className={`relative overflow-hidden rounded-lg hover:opacity-70 focus-visible:opacity-70 ${index == 3 ? "border-2 border-solid border-primary-1" : ""}`}
                    >
                      {index == 3 && (
                        <div className="absolute h-full w-full  bg-primary-2 opacity-60"></div>
                      )}
                      <img
                        className="w-full object-contain"
                        src={imagesTh[2]}
                        alt=""
                      />
                    </Button>
                  </li>
                  <li>
                    <Button
                      onPress={() => handlePick(4)}
                      className={`relative overflow-hidden rounded-lg hover:opacity-70 focus-visible:opacity-70 ${index == 4 ? "border-2 border-solid border-primary-1" : ""}`}
                    >
                      {index == 4 && (
                        <div className="absolute h-full w-full  bg-primary-2 opacity-60"></div>
                      )}
                      <img
                        className="w-full object-contain"
                        src={imagesTh[3]}
                        alt=""
                      />
                    </Button>
                  </li>
                </ul>
              </>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};

export default CustomModal;
