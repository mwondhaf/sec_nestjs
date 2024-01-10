import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { OrganisationsModule } from './organisations/organisations.module';
import { UserProfilesModule } from './user-profiles/user-profiles.module';
import { CompanyModule } from './company/company.module';
import { IncidentTypesModule } from './incident-types/incident-types.module';
import { IncidentCategoriesModule } from './incident-categories/incident-categories.module';
import { IncidentsModule } from './incidents/incidents.module';
import { DepartmentsModule } from './departments/departments.module';
import { PeopleInvolvedModule } from './people-involved/people-involved.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    DatabaseModule,
    OrganisationsModule,
    UserProfilesModule,
    CompanyModule,
    IncidentTypesModule,
    IncidentCategoriesModule,
    IncidentsModule,
    DepartmentsModule,
    PeopleInvolvedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
