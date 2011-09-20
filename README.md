= xtuple example package


== knowhow xtuple package

<pre>
know/
├── db
│   ├── createTerminal.sql
│   └── func_know_test.sql
├── know_package.gz
└── package.xml
</pre>


build package mac os x:

```
gnutar cvfz knowhow_package.gz know
```

na linuxu obični tar

```
tar -cvfz knowhow_package.gz know
```

sa updater-om se paket instalira.


Konkretno, kreira se know schema (u package.xml vidi name='know'), jedna tabela (know.terminal) stored procedura know.test_terminal


== test
 
```
insert into know.terminal(terminal_id, terminal_number, terminal_note, terminal_closed) 
values(1, 'jedan', 'bilješka', false)

insert into know.terminal(terminal_id, terminal_number, terminal_note, terminal_closed) 
values(2, 'dva', 'bilješka 2', true)
```

```select know.test_terminal(1)``` => f

```select know.test_terminal(2)``` => t

```select know.test_terminal(3)``` => ERROR:  terminal with given number not found.

