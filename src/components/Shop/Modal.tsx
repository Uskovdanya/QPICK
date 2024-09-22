interface ModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  card: {
    id: number;
    img: string;
    title: string;
    price: number;
    oldPrice?: number;
    rate: number;
    liked: boolean;
    info: string;
    wireless: boolean;
  };
}

const Modal: React.FC<ModalProps> = ({ isModalOpen, onClose, card }) => {
  if (isModalOpen !== true) {
    return null;
  }
  return (
    <section className="modal fixed bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center bg-modalColor">
      <article className="modal__content relative flex h-[95%] w-[85%] flex-col items-center justify-start overflow-y-auto bg-white p-6 md:h-[75%] md:w-[70%] 2xl:w-[40%]">
        <p className="modal__title mb-2 text-[17px] font-semibold text-titleColor">
          {card.title}
        </p>
        <div className="exit-icon absolute right-2 top-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
            onClick={onClose}
            className="cursor-pointer"
          >
            <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
          </svg>
        </div>
        <img src={card.img} className="modal__image mb-2" alt="modal__image" />

        <p className="text-center indent-2">{card.info}</p>
      </article>
    </section>
  );
};

export default Modal;
