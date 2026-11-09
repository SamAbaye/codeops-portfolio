with open('notes.md') as my_file:
    for text in my_file:
        print(text.strip())

with open('notes.md') as files:
    print(files.read())

with open('new_note.md', 'w') as newnote:
    newnote.write('This is a new note')
    
with open('new_note.md') as newnote:
    print(newnote.read())
with open('new_note.md', 'a') as newnote:
    newnote.write('\nThis is new line note')

with open('new_note.md.', 'a') as newnote:
    newnote.write('\nThis is new line note 2')
