-- This file allow to write SQL commands that will be emitted in test and dev.
-- The commands are commented as their support depends of the database
insert into Club (id, name, description)
values (1, 'TSV Asperg', 'Größter Verein in Asperg');
insert into Club (id, name, description)
values (2, 'SB Asperg', 'Verein in Asperg');
insert into Club (id, name, description)
values (3, 'TV Tamm', 'Verein in Tamm');
insert into Club (id, name, description)
values (4, 'TV Möglingen', 'Verein in Möglingen');

insert into ClubSection (id, name, description, club_id)
values (1, 'Handball', 'Die Handballabteilung des TSV Asperg', 1);
insert into ClubSection (id, name, description, club_id)
values (2, 'Fußball', 'Die Fußballabteilung des TSV Asperg', 1);

insert into Team (id, name, description, clubSection_id)
values (1, 'M1', 'Die Männer 1 des TSV Asperg Handball', 1);
insert into Team (id, name, description, clubSection_id)
values (2, 'M2', 'Die Männer 2 des TSV Asperg Handball', 1);

insert into Event (id, name, description, date, club_id)
values (1, 'Stadtfest', 'Das ist unser Sommerfest', null, 1);
insert into Event (id, name, description, date, club_id)
values (2, 'Schneeball', 'Das ist unsere Weihnachtsfeier', null, 1);
insert into Event (id, name, description, date, club_id)
values (3, 'Beach days', 'Beach Handball Turnier', null, 3);

insert into Shift (id, name, description, startTime, endtime)
values (1, 'Schicht 1', 'Das ist die erste Schicht', null, null);

insert into UserEntity (id, username, password, firstname, lastname, role)
values (1, 'jan', 'user', 'Jan', 'Binder', 'user');
insert into UserEntity (id, username, password, firstname, lastname, role)
values (2, 'admin', 'admin', 'admin', 'admin', 'admin');
