# App

GymPass styles app.

## RF (Requisitos Funcionais)

- [x] Deve ser possivel se cadastrar;
- [x] Deve ser possivel se autenticar;
- [x] Deve ser possivel obter o perfil de um usuario logado;
- [ ] Deve ser possivel obter o numero de check-ins realizados pelo usario logado;
- [x] Deve ser possivel o usuario obter seu historico de check-in;
- [ ] Deve ser possivel o usuario buscar academias proximas;
- [ ] Deve ser possivel o usuario buscar academias pelo nome;
- [x] Deve ser possivel o usuario realizar check-in em uma academia;
- [ ] Deve ser possivel validar o check-in de um usuario;
- [x] Deve ser possivel cadastrar uma academia;

## RNs (Regras de Negocio)

- [x] O usuario nao deve poder se cadastrar com um email duplicado;
- [x] O usuario nao pode fazer dois ckeck-in no mesmo dia;
- [x] O usuario nao pode fazer check-in se nao estiver a 100m da academia;
- [ ] O check-in so pode ser validade ate 20 min apos criado;
- [ ] O check-in so pode ser validado por administradores;
- [ ] A academia so pode ser cadastrada por administradores;


## RNFs (Requisitos Nao Funcionais)	

- [x] A senha do usuario precisa estar criptograda
- [x] Os dados da aplicacao precisam estar persistidos em um banco PostgreSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 items por pagina;
- [ ] O usuario deve ser identificado por um JWT (JSON Web Token)