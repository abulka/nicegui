from nicegui import ui

ui.label('Hello World!').classes('text-2xl')
ui.andy1('Hello Andy!').classes('text-2xl')

# with ui.splitter(horizontal=False) as splitter:
with ui.splitter() as splitter:
    with splitter.add_slot('before'):
        ui.label('This is some content on the left hand side.')
    with splitter.add_slot('after'):
        ui.label('This is some content on the right hand side.')

ui.run(dark=True)
