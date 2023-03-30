from .mixins.text_element import TextElement


class Andy1(TextElement):

    def __init__(self, text: str = '') -> None:
        """Label

        Displays some text.

        :param text: the content of the label
        """
        super().__init__(tag='div', text=text)
