import {
  Button,
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import { IconClose, IconMenu } from "./Icons";

const CustomModal = () => {
  return (
    <DialogTrigger>
      <Button className="md:hidden">
        <IconMenu></IconMenu>
      </Button>
      <ModalOverlay className="fixed inset-0 bg-black bg-opacity-50">
        <Modal className="fixed bottom-0 left-0 top-0 w-3/4  bg-neutral-5 px-4 pt-8 text-neutral-1">
          <Dialog className="flex flex-col items-start gap-8">
            {({ close }) => (
              <>
                <Button onPress={close} className="">
                  <IconClose></IconClose>
                </Button>

                <ul className="flex flex-col gap-4 font-bold">
                  <li className="hover:text-primary-1">
                    <a href="#">Collections</a>
                  </li>
                  <li className="hover:text-primary-1">
                    <a href="#">Men</a>
                  </li>
                  <li className="hover:text-primary-1">
                    <a href="#">Women</a>
                  </li>
                  <li className="hover:text-primary-1">
                    <a href="#">About</a>
                  </li>
                  <li className="hover:text-primary-1">
                    <a href="#">Contact</a>
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
