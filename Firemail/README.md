# 💌 Firemail


cd Firemail_Electron\Firemail
npm install
npm start



//数据库
在mailsync中创建如下数据库
 sqlite3.exe edgehill.db
 sqlite> .databases
 ATTACH DATABASE 'edgehill.db' as 'edgehill';

 CREATE TABLE Task(
   ID INT PRIMARY KEY     NOT NULL,
   data           TEXT    NOT NULL
);

 CREATE TABLE Label(
   ID INT PRIMARY KEY     NOT NULL,
   data           TEXT    NOT NULL
);

 CREATE TABLE Folder(
   ID INT PRIMARY KEY     NOT NULL,
   data           TEXT    NOT NULL
);

CREATE TABLE Thread(
   ID INT PRIMARY KEY     NOT NULL,
   data           TEXT    NOT NULL,
   lastMessageReceivedTimestamp INT
);

CREATE TABLE ThreadCounts(
   ID INT PRIMARY KEY     NOT NULL,
   data           TEXT    NOT NULL
);

CREATE TABLE Message(
   ID INT PRIMARY KEY     NOT NULL,
   data           TEXT    NOT NULL,
   date           INTEGER
);

CREATE TABLE ModelPluginMetadata(
   ID INT PRIMARY KEY     NOT NULL,
   value           TEXT    NOT NULL
);

sqlite>.tables
sqlite>.schema TBNAME

DETACH DATABASE 'Alias-Name';



this.inboxCategory = new Folder({
      id: 'id-123',
      role: 'inbox',
      path: 'INBOX',
      accountId: TEST_ACCOUNT_ID,
    });

archive: new Label({ role: 'all', path: 'all', accountId: 'a2' }),
          inbox: new Label({ role: 'inbox', path: 'inbox2', accountId: 'a2' }),
          trash: new Label({ role: 'trash', path: 'trash2', accountId: 'a2' }),
           labels: [new Label({ displayName: 'bla' })],
            archive: new Label({ name: 'archive' }),

   this._account = new Account({
      name: identity ? `${identity.firstName || ''} ${identity.lastName || ''}` : '',
      emailAddress: identity ? identity.emailAddress : '',
      settings: {},
    });

          new Account({
        provider: 'gmail',
        name: TestConstants.TEST_ACCOUNT_NAME,
        emailAddress: TestConstants.TEST_ACCOUNT_EMAIL,
        id: TestConstants.TEST_ACCOUNT_ID,
        aliases: [
          `${TestConstants.TEST_ACCOUNT_NAME} Alternate <${
            TestConstants.TEST_ACCOUNT_ALIAS_EMAIL
          }>`,
        ],
      }),